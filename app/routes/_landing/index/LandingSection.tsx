import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/react';
import { Link } from '@remix-run/react';
import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

import { LandingHeader } from './LandingHeader';

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
        <LandingHeader className="self-center text-center lg:self-start lg:text-left">{title}</LandingHeader>
        <p className="text-center lg:text-justify">{children}</p>
        <Link to="/tavern">
          <Button className="px-6 font-semibold lg:self-start" color="primary" radius="sm" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
      <Image
        alt="Character Sheet"
        className="self-center rounded-md shadow-lg lg:self-end lg:rounded-2xl"
        height={1000}
        src={image}
        width={600}
      />
    </div>
  );
};

export { LandingSection };
