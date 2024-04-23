import { Button } from '@nextui-org/button';
import { Divider, Tab, useDisclosure } from '@nextui-org/react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { Pod } from '@/components/Elements/Pod';
import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import { FormInput } from '@/components/Form/FormInput';
import { useToastMessages } from '@/hooks/useToastMessages';

import { ResetPasswordModal } from './ResetPasswordModal';

type LoginFormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type LoginPageContentProps = {
  confirm?: boolean;
  label: string;
};

const LoginPageContent = ({ confirm, label }: LoginPageContentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { formState, watch } = useFormContext<LoginFormValues>();
  const isFormValid = formState.isValid;

  return (
    <Pod className="rounded-t-none" variant="alt">
      <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
        <h1 className="mb-6 text-2xl font-bold">{label}</h1>
        <FormInput isRequired label="Email" name="email" styleVariant="basic" type="email" />
        <FormInput isRequired label="Password" name="password" styleVariant="basic" type="password" />
        {confirm ? (
          <FormInput
            isRequired
            watchFlag
            errorMessage={formState.errors.confirmPassword?.message as string}
            label="Confirm Password"
            name="confirmPassword"
            rules={{ validate: (value: string) => watch('password') === value || 'Passwords do not match' }}
            styleVariant="basic"
            type="password"
          />
        ) : null}
        <Button className="w-full" color="primary" isDisabled={!isFormValid} radius="sm" type="submit">
          {label}
        </Button>
        <Button className="w-full" radius="sm" onClick={onOpen}>
          Forgot Password?
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

const LoginPage = () => {
  useToastMessages('auth');
  const methods = useForm<LoginFormValues>({ mode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <TabList defaultTab="login">
        <Tab key="login" title={<TabTitle label="Login" size="lg" styleVariant="alt" />}>
          <form action="/api/auth/login" method="post">
            <LoginPageContent label="Login" />
          </form>
        </Tab>
        <Tab key="signup" title={<TabTitle label="Sign Up" size="lg" styleVariant="alt" />}>
          <form action="/api/auth/signup" method="post">
            <LoginPageContent confirm label="Sign Up" />
          </form>
        </Tab>
      </TabList>
    </FormProvider>
  );
};

export default LoginPage;
