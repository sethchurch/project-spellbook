import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { character } from '@/config/dummyData';
import { CharacterListItemDisplay } from '@/features/characters';
import { BioTab } from '@/features/characters/components/CharacterSheet/BioTab';
import { CharacterSheetProvider } from '@/features/characters/components/CharacterSheet/CharacterSheetProvider';
import { CoreTab } from '@/features/characters/components/CharacterSheet/CoreTab';
import { Pod } from '@/features/characters/components/CharacterSheet/Pod';
import { cn } from '@/utils/cn';

import { LandingNav } from './LandingNav';
import { LandingSectionAside } from './LandingSectionAside';

const landingPageSectionLookup = {
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
    <div className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-200/80 dark:bg-transparent">
      <MaxWidthWrapper className="flex flex-col gap-8 md:gap-16 lg:gap-24 2xl:overflow-hidden">
        <LandingNav isLoggedIn={false} />
        <section className="flex w-full justify-between gap-3">
          <LandingSectionAside {...landingPageSectionLookup['character-storage']} />
          <div className="ml-52 h-min w-screen max-w-screen-2xl shrink-0">
            <CharacterSheetProvider isFacade characterData={character}>
              <Pod variant="alt">
                <CoreTab />
              </Pod>
            </CharacterSheetProvider>
          </div>
        </section>
        <section className="flex w-full justify-between gap-3 py-24">
          <div className="grid grid-cols-[150px_150px_150px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="relative" style={{ top: `${2 - index * 20}px` }}>
                <CharacterListItemDisplay character={character} className={cn('z-10 w-96 shadow-xl')} />
              </div>
            ))}
          </div>
          <LandingSectionAside
            {...landingPageSectionLookup['unique-characters']}
            className="py-8"
            direction="reverse"
          />
        </section>
        <section className="flex w-full justify-between gap-3">
          <LandingSectionAside {...landingPageSectionLookup['character-journey']} />
          <div className="ml-52 h-min w-screen max-w-screen-2xl shrink-0">
            <CharacterSheetProvider isFacade characterData={character}>
              <Pod variant="alt">
                <BioTab />
              </Pod>
            </CharacterSheetProvider>
          </div>
        </section>
        <footer className="mb-4 rounded-xl bg-stone-100 p-24 text-center text-2xl font-semibold shadow-lg dark:bg-zinc-900 lg:mb-8" />
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
