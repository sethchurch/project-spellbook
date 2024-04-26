import { useDisclosure } from '@nextui-org/modal';
import { Divider } from '@nextui-org/react';

import { Button } from '@/components/Elements/Button';
import { Input } from '@/components/Elements/Input';
import { Pod } from '@/components/Elements/Pod';

import { ResetPasswordModal } from './ResetPasswordModal';

type AuthFormContentProps = {
  confirm?: boolean;
  label: string;
};

const AuthFormContent = ({ confirm, label }: AuthFormContentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Pod className="rounded-t-none" variant="alt">
      <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
        <h1 className="mb-6 text-2xl font-bold">{label}</h1>
        <Input isRequired defaultValue="test@test.co" label="Email" name="email" styleVariant="basic" type="email" />
        <Input isRequired defaultValue="abc" label="Password" name="password" styleVariant="basic" type="password" />
        {confirm ? (
          <Input
            defaultValue='abc'
            type="password"
            isRequired
            // errorMessage={formState.errors.confirmPassword?.message as string}
            label="Confirm Password"
						name="confirmPassword"
            // rules={{ validate: (value: string) => watch('password') === value || 'Passwords do not match' }}
            styleVariant="basic"
          />
        ) : null}
        <Button className="w-full" color="primary" radius="sm" type="submit">
          {label}
        </Button>
        <Button className="w-full" radius="sm" onClick={onOpen}>
          Forgot Password
        </Button>
        <Divider />
        <Button isDisabled className="w-full" radius="sm">
          {label} with Google
        </Button>
        <Button isDisabled className="w-full" radius="sm">
          {label} with Microsoft Account
        </Button>
        <Button isDisabled className="w-full" radius="sm">
          {label} with Apple
        </Button>
      </div>
      <ResetPasswordModal isOpen={isOpen} onClose={onClose} />
    </Pod>
  );
};

export { AuthFormContent };
