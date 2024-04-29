import type { User } from '@/database';
import { db } from '@/database';
import type { AuthSession } from '@/features/auth';
import { createEmailAuthAccount, deleteAuthAccount, signInWithEmail } from '@/features/auth/utils/service.server';

export async function getUserByEmail(email: User['email']) {
  return db.user.findUnique({ where: { email: email.toLowerCase() } });
}

async function createUser({ email, userId }: Pick<AuthSession, 'userId' | 'email'>) {
  return db.user
    .create({
      data: {
        email,
        id: userId,
      },
    })
    .then((user) => user)
    .catch(() => null);
}

export async function tryCreateUser({ email, userId }: Pick<AuthSession, 'userId' | 'email'>) {
  const user = await createUser({ userId, email });

  // failed to create user, cleanup auth account
  if (!user) {
    await deleteAuthAccount(userId);
    return null;
  }

  return user;
}

export async function createUserAccount(email: string, password: string): Promise<AuthSession | null> {
  const authAccount = await createEmailAuthAccount(email, password);

  if (!authAccount) return null;

  const authSession = await signInWithEmail(email, password);

  // failed to sign in
  if (!authSession) {
    await deleteAuthAccount(authAccount.id);
    return null;
  }

  const user = await tryCreateUser(authSession);

  if (!user) return null;

  return authSession;
}
