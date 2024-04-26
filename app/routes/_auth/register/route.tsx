import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Divider, useDisclosure } from '@nextui-org/react';
import type { ActionFunction, ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, isRouteErrorResponse, redirect, useActionData, useRouteError } from '@remix-run/react';
import { z } from 'zod';

import { createClient } from '@/.server/supabase';
import { Button } from '@/components/Elements/Button';
import { Input } from '@/components/Elements/Input';
import { Pod } from '@/components/Elements/Pod';
import { ResetPasswordModal } from '@/features/auth';
import { useToastMessages } from '@/hooks/useToastMessages';

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
  const requestUrl = new URL(request.url);
  const { supabase } = createClient({ request });
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: RegisterFormSchema });

  if (submission.status !== 'success') {
    return json(submission.reply());
  }

  const { email, password } = submission.value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${requestUrl.origin}/api/auth/callback` },
  });

  if (error) {
    return redirect(`/register?error=${error.message}`);
  }

  const successMessage = 'You have successfully registered. Please check your email to verify your account.';
  return redirect(`/register?message=${encodeURIComponent(successMessage)}`);
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

  useToastMessages('register');
  return (
    <Form id={form.id} method="POST" onSubmit={form.onSubmit}>
      <Pod className="rounded-t-none" variant="alt">
        <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
          <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>
          <Input
            isRequired
            defaultValue="admin@test.com"
            errorMessage={fields.email.errors}
            label="Email"
            name="email"
            styleVariant="basic"
            type="email"
          />
          <Input
            isRequired
            defaultValue="abc123"
            errorMessage={fields.password.errors}
            label="Password"
            name="password"
            styleVariant="basic"
            type="password"
          />
          <Input
            isRequired
            defaultValue="abc123"
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
      </Pod>
    </Form>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return <pre>Unknown error</pre>;
}

export default RegisterForm;
