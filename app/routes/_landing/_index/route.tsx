import { motion } from 'framer-motion';

import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { DisableTabIndex } from '@/components/Util/DisableTabIndex';
import { character } from '@/config/dummyData';
import { CharacterListItemDisplay } from '@/features/characters';
import { BioTab } from '@/features/characters/components/CharacterSheet/BioTab';
import { CharacterSheetProvider } from '@/features/characters/components/CharacterSheet/CharacterSheetProvider';
import { CoreTab } from '@/features/characters/components/CharacterSheet/CoreTab';
import { Pod } from '@/features/characters/components/CharacterSheet/Pod';
import { cn } from '@/utils/cn';

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

const LandingPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-200/80 dark:bg-transparent">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-8 overflow-hidden md:gap-16 lg:gap-24">
          <LandingNav isLoggedIn={false} />

          <section className="flex w-full justify-between gap-3">
            <LandingSectionAside {...sectionLookup['character-storage']} />
            <motion.div
              animate={{ x: '0%' }}
              initial={{ x: '100%' }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.5, damping: 12 }}
            >
              <DisableTabIndex>
                <Pod className="ml-52 h-min w-screen max-w-screen-2xl shrink-0 overflow-hidden" variant="alt">
                  <CharacterSheetProvider isFacade characterData={character}>
                    <CoreTab />
                  </CharacterSheetProvider>
                </Pod>
              </DisableTabIndex>
            </motion.div>
          </section>

          <section className="flex w-full justify-between gap-3 py-24">
            <div className="grid grid-cols-[150px_150px_150px]">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="relative" style={{ top: `${2 - index * 20}px` }}>
                  <CharacterListItemDisplay character={character} className={cn('z-10 w-96 shadow-xl')} />
                </div>
              ))}
            </div>
            <LandingSectionAside {...sectionLookup['unique-characters']} className="py-8" direction="reverse" />
          </section>

          <section className="flex w-full justify-between gap-3">
            <LandingSectionAside {...sectionLookup['character-journey']} />
            <DisableTabIndex>
              <Pod className="ml-52 h-min w-screen max-w-screen-2xl shrink-0" variant="alt">
                <CharacterSheetProvider isFacade characterData={character}>
                  <BioTab />
                </CharacterSheetProvider>
              </Pod>
            </DisableTabIndex>
          </section>

          <footer className="mb-4 rounded-xl bg-stone-100 p-24 text-center text-2xl font-semibold shadow-lg dark:bg-zinc-900 lg:mb-8" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
