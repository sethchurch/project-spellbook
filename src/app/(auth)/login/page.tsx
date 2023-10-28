'use client';

import { Button } from '@nextui-org/button';
import { Divider, Tab } from '@nextui-org/react';
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Input } from '@/components/Elements/Input';
import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

const LoginPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative grid h-screen w-full grid-cols-[1fr_4fr_1fr] items-center justify-center py-6 lg:grid-cols-3">
        <Link className="self-start" href="/tavern">
          <Button isIconOnly>
            <IconChevronLeft />
          </Button>
        </Link>
        <div className="z-10 col-start-2">
          <TabList defaultTab="login">
            <Tab
              key="login"
              title={
                <TabTitle size="lg" styleVariant="alt">
                  Login
                </TabTitle>
              }
            >
              <form>
                <Pod disableLoading className="rounded-t-none" variant="alt">
                  <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
                    <h1 className="mb-6 text-2xl font-bold">Login</h1>
                    <Input label="Email" name="email" styleVariant="basic" />
                    <Input label="Password" name="password" styleVariant="basic" />
                    <Button className="w-full" color="primary" radius="sm">
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
            </Tab>
            <Tab
              key="signup"
              title={
                <TabTitle size="lg" styleVariant="alt">
                  Sign Up
                </TabTitle>
              }
            >
              <form>
                <Pod disableLoading className="rounded-t-none" variant="alt">
                  <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
                    <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>
                    <Input label="Email" name="email" styleVariant="basic" />
                    <Input label="Password" name="password" styleVariant="basic" />
                    <Input label="Confirm Password" name="confirmPassword" styleVariant="basic" />
                    <Button className="w-full" color="primary" radius="sm">
                      Sign Up
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