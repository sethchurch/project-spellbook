/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

import { SEED_EMAIL, SEED_PASS, SUPABASE_SERVICE_ROLE, SUPABASE_URL } from '../utils/env';
import { seedDefaultCharacter } from './characterSeedData.server';

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const prisma = new PrismaClient();

const email = SEED_EMAIL;

const getUserId = async (): Promise<string> => {
  const userList = await supabaseAdmin.auth.admin.listUsers();

  if (userList.error) {
    throw userList.error;
  }

  const existingUserId = userList.data.users.find((user) => user.email === email)?.id;

  if (existingUserId) {
    return existingUserId;
  }

  const newUser = await supabaseAdmin.auth.admin.createUser({
    email,
    password: SEED_PASS,
    email_confirm: true,
  });

  if (newUser.error) {
    throw newUser.error;
  }

  return newUser.data.user.id;
};

async function seed() {
  try {
    const id = await getUserId();

    // cleanup the existing database
    await prisma.user.delete({ where: { email } }).catch(() => {
      // no worries if it doesn't exist yet
    });

    const user = await prisma.user.create({ data: { email, id } });

    const character = await seedDefaultCharacter(prisma, user.id);

    console.log(`Database has been seeded. 🌱\n`);
    console.log(`User added to your database 👇 \n🆔: ${user.id}\n📧: ${user.email}\n🔑: supabase`);
    console.log(`User's Character has been added:\n 🪄 : ${character.name} `);
  } catch (cause) {
    console.error(cause);
    throw new Error('Seed failed 🥲');
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
