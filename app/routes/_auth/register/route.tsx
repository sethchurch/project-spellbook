import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Divider, useDisclosure } from '@nextui-org/react';
import type { ActionFunction, ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, redirect, useActionData } from '@remix-run/react';
import { z } from 'zod';

import { Button } from '@/components/Elements/Button';
import { Input } from '@/components/Elements/Input';
import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { ResetPasswordModal } from '@/features/auth';
import { createAuthSession } from '@/features/auth/utils/session.server';
import { createUserAccount, getUserByEmail } from '@/features/users';

const RegisterFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: RegisterFormSchema });

  if (submission.status !== 'success') {
    return json(submission.reply());
  }

  const { email, password } = submission.value;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return redirect(`/register?error=${encodeURIComponent('User already exists')}`);
  }

  const authSession = await createUserAccount(email, password);

  if (!authSession) {
    return redirect(`/register?error=${encodeURIComponent('Failed to create user')}`);
  }

  return createAuthSession({
    request,
    authSession,
    // TODO: add additional redirect options
    redirectTo: '/tavern',
  });
};

const RegisterForm = () => {
  const lastResult = useActionData<typeof action>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: RegisterFormSchema });
    },
    shouldValidate: 'onBlur',
  });

  return (
    <Form id={form.id} method="POST" onSubmit={form.onSubmit}>
      <div className="flex-stack">
        <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>
        <Input
          isRequired
          errorMessage={fields.email.errors}
          label="Email"
          name="email"
          styleVariant="basic"
          type="email"
        />
        <Input
          isRequired
          errorMessage={fields.password.errors}
          label="Password"
          name="password"
          styleVariant="basic"
          type="password"
        />
        <Input
          isRequired
          errorMessage={fields.confirmPassword.errors}
          label="Confirm Password"
          name="confirmPassword"
          styleVariant="basic"
          type="password"
        />
        <Button className="w-full" color="primary" radius="sm" type="submit">
          Sign Up
        </Button>
        <Button className="w-full" radius="sm" onClick={onOpen}>
          Forgot Password
        </Button>
        <Divider />
        <Button isDisabled className="w-full" radius="sm">
          Sign Up with Google
        </Button>
        <Button isDisabled className="w-full" radius="sm">
          Sign Up with Microsoft Account
        </Button>
        <Button isDisabled className="w-full" radius="sm">
          Sign Up with Apple
        </Button>
      </div>
      <ResetPasswordModal isOpen={isOpen} onClose={onClose} />
    </Form>
  );
};

export function ErrorBoundary() {
  return <BasicErrorBoundary />;
}

export default RegisterForm;
