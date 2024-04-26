import { AuthFormContent } from '@/features/auth';
import { useToastMessages } from '@/hooks/useToastMessages';

const LoginForm = () => {
  useToastMessages('auth');
  return (
    <form action="/api/auth/login" method="post">
      <AuthFormContent label="Login" />
    </form>
  );
};

export default LoginForm;
