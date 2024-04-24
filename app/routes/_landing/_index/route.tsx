import { cn } from '@nextui-org/react';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { Pod } from '@/components/Elements/Pod';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { DisableTabIndex } from '@/components/Util/DisableTabIndex';
import breakpoints from '@/config/breakpoints';
import { character } from '@/config/dummyData';
import { BioTab, CharacterListItemDisplay, CharacterSheetProvider, CoreTab } from '@/features/characters';

import { LandingNav } from './LandingNav';
import { LandingSectionAside } from './LandingSectionAside';

const sectionLookup = {
  'character-storage': {
    superHeaderText: 'Tabletop',
    headerText: 'Character Storage',
    descriptionText:
      'We’ve designed our character dashboard to be easy to use and powerful. Quickly build and detail any character you can think of.',
  },
  'unique-characters': {
    superHeaderText: 'Personalize',
    headerText: 'Unique Characters',
    descriptionText:
      'Designed for any type of character in mind you’ll find plenty of options to create the character you need.',
  },
  'character-journey': {
    superHeaderText: 'Tracking Your',
    headerText: "Character's Journey",
    descriptionText:
      'Keep track of every detail you need to know for long running campaigns. Track specific events and keep notes.',
  },
};

const SlideOut = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      animate={{ x: '0%' }}
      initial={{ x: '100%' }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.5, damping: 12 }}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = () => {
  const { width } = useWindowSize({ initializeWithValue: false });

  const shouldDisplayComponent = width ? width > breakpoints.xl : false;

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-200/80 dark:bg-transparent">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4 overflow-hidden p-0 md:gap-16 md:p-3 lg:gap-20">
          <LandingNav className="py-3" isLoggedIn={false} />

          <section className="flex w-full flex-col justify-between gap-12 lg:flex-row">
            <LandingSectionAside {...sectionLookup['character-storage']} className="mb-3" />
            <SlideOut>
              {shouldDisplayComponent ? (
                <DisableTabIndex>
                  <Pod className="ml-52 h-min w-screen max-w-screen-2xl shrink-0 overflow-hidden" variant="alt">
                    <CharacterSheetProvider isFacade characterData={character}>
                      <CoreTab />
                    </CharacterSheetProvider>
                  </Pod>
                </DisableTabIndex>
              ) : (
                <div className="ml-8 w-[950px] overflow-hidden rounded-lg">
                  <img alt="Character Sheet" src="/images/5eCharacterSheet-Core.png" />
                </div>
              )}
            </SlideOut>
          </section>

          <section className="flex w-full flex-col-reverse justify-between gap-3 py-0 md:gap-12 md:py-24 lg:flex-row">
            <div className="relative m-auto lg:m-0">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={cn('md:ml-10 top-0 left-0', index === 0 ? '' : 'absolute')}
                  style={{ rotate: `${index * 5}deg`, zIndex: 3 - index, scale: `${1 - index * 0.03}` }}
                >
                  <CharacterListItemDisplay character={character} className="z-10 w-96 shadow-md dark:shadow-2xl" />
                </div>
              ))}
            </div>
            <LandingSectionAside {...sectionLookup['unique-characters']} className="py-8" direction="reverse" />
          </section>

          <section className="flex w-full flex-col justify-between gap-12 lg:flex-row">
            <LandingSectionAside {...sectionLookup['character-journey']} className="mb-3" />
            <SlideOut>
              {shouldDisplayComponent ? (
                <DisableTabIndex>
                  <Pod className="ml-52 h-min w-screen max-w-screen-2xl shrink-0" variant="alt">
                    <CharacterSheetProvider isFacade characterData={character}>
                      <BioTab />
                    </CharacterSheetProvider>
                  </Pod>
                </DisableTabIndex>
              ) : (
                <div className="ml-8 w-[950px] overflow-hidden rounded-lg">
                  <img alt="Character Sheet" src="/images/5eCharacterSheet-Bio.png" />
                </div>
              )}
            </SlideOut>
          </section>

          <footer className="rounded-md bg-stone-100 p-8 text-center font-semibold shadow-sm dark:bg-zinc-900">
            <p>&copy; 2024 Project Spellbook</p>
            <p>All rights reserved.</p>
          </footer>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
