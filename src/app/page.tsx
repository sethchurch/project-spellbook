'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/Elements/Icon';
import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { AppConfig } from '@/config/AppConfig';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center whitespace-nowrap bg-zinc-100/80 dark:bg-transparent">
      <div className=" w-full bg-zinc-300 p-3 shadow-sm dark:bg-zinc-800 ">
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex gap-4 align-middle">
            <Icon icon="wand" />
            <p>{AppConfig.site_name}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/tavern">Tavern</Link>
            <ToggleThemeButton />
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="w-full py-24">
          <div className="flex-stack">
            <h1 className="mb-4 whitespace-normal text-5xl">
              Welcome to <span className="text-primary">{AppConfig.site_name}</span>
            </h1>
            <Link href="/tavern">
              <Button className="px-8" color="primary" size="lg">
                To The Tavern
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col gap-16">
          <Image
            alt="Character Sheet"
            className="self-end"
            height={1000}
            src="/images/CharacterSheetWithTabs.png"
            width={500}
          />
          <Image
            alt="Character Sheet"
            className="self-start"
            height={1000}
            src="/images/AdvancedCreator.png"
            width={500}
          />
          <Image alt="Character Sheet" className="self-end" height={1000} src="/images/BioSheet.png" width={500} />
        </div>
        <footer className="mt-64 h-32 w-full bg-zinc-900" />
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
