'use client';

import { Button } from '@nextui-org/react';
import { IconWand } from '@tabler/icons-react';
import Link from 'next/link';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { AppConfig } from '@/config/AppConfig';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex  w-full items-center justify-between bg-zinc-300 p-3 dark:bg-zinc-800">
        <div className="flex gap-3 align-middle">
          <IconWand />
          <p>{AppConfig.site_name}</p>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tavern">To The Tavern</Link>
          <ToggleThemeButton />
        </div>
      </div>

      <div className="h-screen w-1/2 py-24">
        <div className="flex-stack gap-8">
          <h1 className="text-5xl">Welcome to {AppConfig.site_name}</h1>
          <Link href="/tavern">
            <Button className="px-8" size="lg" variant="faded">
              To The Tavern
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
