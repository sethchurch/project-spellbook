import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface LandingSectionProps extends PropsWithChildren {
  title: string;
  image: string;
  alignment?: 'left' | 'right';
}

const LandingSection = ({ title, image, alignment, children }: LandingSectionProps) => {
  return (
    <div
      className={cn(
        'flex w-full lg:justify-between p-3 lg:p-6 gap-12',
        alignment === 'right' ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row',
      )}
    >
      <div className="flex w-full flex-col gap-4 self-center md:w-8/12 lg:w-5/12 lg:self-start">
        <h2 className="text-center text-3xl font-bold lg:text-left">{title}</h2>
        <p className="text-center lg:text-justify">{children}</p>
        <Button className="px-6 font-semibold lg:self-start" color="primary" radius="sm" size="lg">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
      <Image
        alt="Character Sheet"
        className="self-center rounded-md shadow-xl lg:self-end lg:rounded-2xl"
        height={1000}
        src={image}
        width={600}
      />
    </div>
  );
};

export { LandingSection };
