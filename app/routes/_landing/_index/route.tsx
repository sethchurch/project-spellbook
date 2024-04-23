import { cn } from '@nextui-org/react';
import { useWindowSize } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

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
  const { width } = useWindowSize();

  const shouldDisplayComponent = width ? width > breakpoints.xl : false;

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-200/80 dark:bg-transparent">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-8 overflow-hidden md:gap-16 lg:gap-24">
          <LandingNav isLoggedIn={false} />

          <section className="flex w-full flex-col justify-between gap-3 lg:flex-row">
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

          <section className="flex w-full flex-col-reverse justify-between gap-3 py-0 md:py-24 lg:flex-row">
            <div className="relative m-auto lg:m-0">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={cn('md:ml-10', index === 0 ? '' : 'absolute')}
                  style={{
                    rotate: `${index * 5}deg`,
                    top: 0,
                    left: 0,
                    zIndex: 3 - index,
                    scale: `${1 - index * 0.03}`,
                  }}
                >
                  <CharacterListItemDisplay character={character} className="z-10 w-96 shadow-2xl" />
                </div>
              ))}
            </div>
            <LandingSectionAside {...sectionLookup['unique-characters']} className="py-8" direction="reverse" />
          </section>

          <section className="flex w-full flex-col justify-between gap-3 lg:flex-row">
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

          <footer className="mb-4 rounded-xl bg-stone-100 p-24 text-center text-2xl font-semibold shadow-lg dark:bg-zinc-900 lg:mb-8" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
