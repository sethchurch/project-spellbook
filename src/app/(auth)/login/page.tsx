'use client';

import { Button } from '@nextui-org/button';
import { Divider, Tab } from '@nextui-org/react';
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Pod } from '@/components/CharacterSheet/Pod';
import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { FormInput } from '@/components/Form/FormInput';
import { PasswordInput } from '@/components/Form/PasswordInput';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

type LoginFormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const LoginPage = () => {
  const methods = useForm<LoginFormValues>({ mode: 'onChange' });
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const message = searchParams.get('message');

  const resetForm = () => {
    methods.reset();
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { id: 'login-error' });
    }
    if (message) {
      toast.success(message, { id: 'login-message' });
    }
  }, [error, message]);

  return (
    <MaxWidthWrapper>
      <div className="relative grid h-screen w-full grid-cols-[1fr_4fr_1fr] items-center justify-center py-6 lg:grid-cols-3">
        <Link className="self-start" href="/tavern">
          <Button isIconOnly>
            <IconChevronLeft />
          </Button>
        </Link>
        <div className="z-10 col-start-2">
          <TabList defaultTab="login" onSelectionChange={resetForm}>
            <Tab key="login" title={<TabTitle label="Login" size="lg" styleVariant="alt" />}>
              <FormProvider {...methods}>
                <form action="/api/auth/login" method="post">
                  <Pod disableLoading className="rounded-t-none" variant="alt">
                    <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
                      <h1 className="mb-6 text-2xl font-bold">Login</h1>
                      <FormInput isRequired label="Email" name="email" styleVariant="basic" type="email" />
                      <PasswordInput />
                      <Button
                        className="w-full"
                        color="primary"
                        isDisabled={!methods.formState.isValid}
                        radius="sm"
                        type="submit"
                      >
                        Login
                      </Button>
                      <Divider />
                      <Button isDisabled className="w-full" radius="sm">
                        Continue with Google
                      </Button>
                      <Button isDisabled className="w-full" radius="sm">
                        Continue with Microsoft Account
                      </Button>
                      <Button isDisabled className="w-full" radius="sm">
                        Continue with Apple
                      </Button>
                    </div>
                  </Pod>
                </form>
              </FormProvider>
            </Tab>
            <Tab key="signup" title={<TabTitle label="Sign Up" size="lg" styleVariant="alt" />}>
              <FormProvider {...methods}>
                <form action="/api/auth/signup" method="post">
                  <Pod disableLoading className="rounded-t-none" variant="alt">
                    <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
                      <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>
                      <FormInput isRequired label="Email" name="email" styleVariant="basic" type="email" />
                      <PasswordInput confirm />
                      <Button
                        className="w-full"
                        color="primary"
                        isDisabled={!methods.formState.isValid}
                        radius="sm"
                        type="submit"
                      >
                        Sign Up
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
                  </Pod>
                </form>
              </FormProvider>
            </Tab>
          </TabList>
        </div>
        <ToggleThemeButton className="self-start" variant="shadow" />
        <div className="absolute left-[50%] top-[50%] hidden h-32 w-3/5 translate-x-[-50%] translate-y-[-40%] rounded-full bg-stone-200 dark:bg-zinc-800 lg:block" />
      </div>
    </MaxWidthWrapper>
  );
};

export default LoginPage;
