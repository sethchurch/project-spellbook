'use client';

import { Button } from '@nextui-org/button';
import { Divider, Tab } from '@nextui-org/react';

import { Pod } from '@/components/CharacterSheet/Pod';
import { Input } from '@/components/Elements/Input';
import { TabList } from '@/components/Elements/TabList';
import { TabTitle } from '@/components/Elements/TabTitle';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

const LoginPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid w-full grid-cols-[1fr_5fr_1fr] items-center justify-center py-6 lg:grid-cols-3">
        <div className="col-start-2">
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
                <Pod className="rounded-t-none" variant="alt">
                  <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
                    <h1 className="font-bold">Login</h1>
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
                <Pod variant="alt">
                  <div className="flex-stack p-3 text-center lg:px-12 lg:py-6">
                    <h1 className="font-bold">Sign Up</h1>
                    <Input label="Email" name="email" styleVariant="basic" />
                    <Input label="Password" name="password" styleVariant="basic" />
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
      </div>
    </MaxWidthWrapper>
  );
};

export default LoginPage;
