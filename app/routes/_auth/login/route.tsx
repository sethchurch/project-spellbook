import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Divider, useDisclosure } from '@nextui-org/react';
import { Form, useActionData } from '@remix-run/react';
import { z } from 'zod';

import { Button } from '@/components/Elements/Button';
import { Input } from '@/components/Elements/Input';
import { ResetPasswordModal } from '@/features/auth';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
//   const requestUrl = new URL(request.url);
//   const { supabase } = createClient({ request });
//   const formData = await request.formData();
//   const submission = parseWithZod(formData, { schema: LoginFormSchema });

//   if (submission.status !== 'success') {
//     return json(submission.reply());
//   }

//   const { email, password } = submission.value;

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: { emailRedirectTo: `${requestUrl.origin}/api/auth/callback` },
//   });

//   if (error) {
//     return redirect(`/register?error=${error.message}`);
//   }

//   const successMessage = 'You have successfully registered. Please check your email to verify your account.';
//   return redirect(`/register?message=${encodeURIComponent(successMessage)}`);
// };

const LoginForm = () => {
  const lastResult = useActionData<typeof action>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: LoginFormSchema });
    },
    shouldValidate: 'onBlur',
  });

  return (
    <Form id={form.id} method="POST" onSubmit={form.onSubmit}>
      <div className="flex-stack">
        <h1 className="mb-6 text-2xl font-bold">Login</h1>
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
        <Button className="w-full" color="primary" radius="sm" type="submit">
          Login
        </Button>
        <Button className="w-full" radius="sm" onClick={onOpen}>
          Forgot Password
        </Button>
        <Divider />
        <Button isDisabled className="w-full" radius="sm">
          Login with Google
        </Button>
        <Button isDisabled className="w-full" radius="sm">
          Login with Microsoft Account
        </Button>
        <Button isDisabled className="w-full" radius="sm">
          Login with Apple
        </Button>
      </div>
      <ResetPasswordModal isOpen={isOpen} onClose={onClose} />
    </Form>
  );
};

export default LoginForm;
