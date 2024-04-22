import { CharacterSheet } from '@/components/CharacterSheet/CharacterSheet';
import { CharacterSheetProvider } from '@/components/CharacterSheet/CharacterSheetProvider';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import { character } from '@/config/dummyData';

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
      <MaxWidthWrapper className="flex flex-col gap-8 md:gap-16 lg:gap-24">
        <LandingNav isLoggedIn={false} />
        <section className="flex w-full justify-between gap-3">
          <LandingSectionAside {...landingPageSectionLookup['character-storage']} />
          <div className="ml-52 h-min w-fit shrink-0">
            <CharacterSheetProvider isFacade characterData={character}>
              <CharacterSheet />
            </CharacterSheetProvider>
          </div>
        </section>
        <section>
          <LandingSectionAside {...landingPageSectionLookup['unique-characters']} direction="reverse" />
        </section>
        <section>
          <LandingSectionAside {...landingPageSectionLookup['character-journey']} />
        </section>
        <footer className="mb-4 rounded-xl bg-stone-100 p-24 text-center text-2xl font-semibold shadow-lg dark:bg-zinc-900 lg:mb-8" />
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
