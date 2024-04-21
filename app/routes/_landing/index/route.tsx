import { Button } from '@nextui-org/button';
import { Link } from '@remix-run/react';
import { IconWand } from '@tabler/icons-react';

import { ToggleThemeButton } from '@/components/Elements/ToggleThemeButton';
import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';

// import { supabaseServer } from '@/lib/supabaseServer';
import { LandingHeader } from './LandingHeader';
import { LandingSection } from './LandingSection';

const LandingPage = () => {
  // todo fix with loader
  // const { data } = await supabaseServer().auth.getSession();
  const data = { session: null };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-200/80 dark:bg-transparent">
      <MaxWidthWrapper className="flex flex-col gap-8 md:gap-16 lg:gap-24">
        <div className="p-6">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <IconWand />
              <p className="text-lg">Project Spellbook</p>
            </div>
            <div className="flex items-center gap-3">
              {!data?.session ? (
                <Link to="/login">
                  <Button className="px-6 font-bold shadow-2xl" radius="sm">
                    Login
                  </Button>
                </Link>
              ) : null}
              <Link className="underline underline-offset-4" to="/tavern">
                <Button className="px-6 font-bold shadow-2xl" color="primary" radius="sm">
                  Enter the Tavern
                </Button>
              </Link>
              <ToggleThemeButton />
            </div>
          </div>
        </div>
        <LandingSection image="/images/CharacterSheetWithTabs.png" title="Welcome to Project Spellbook">
          Create characters like never before with our AI-powered Dungeons & Dragons character builder. Whether
          you&apos;re a seasoned player or just starting out, Project Spellbook simplifies the process of crafting and
          managing your D&D 5e character sheets. Dive into a world of endless possibilities and let your imagination
          soar.
        </LandingSection>
        <LandingSection alignment="right" image="/images/BioSheet.png" title="Unveil Your Character's Essence">
          Behind every hero is a tale waiting to unfold. The character sheet is not just about statistics and abilities;
          it&apos;s a canvas for your character&apos;s history, motivations, and personality. Flesh out the details that
          set your character apart in the realm of D&D. Witness how a well-crafted backstory enriches every decision,
          interaction, and turn in the game.
        </LandingSection>
        <LandingSection image="/images/AdvancedCreator.png" title="Visualize Your Adventurer">
          From the mysterious depths of enchanted forests to the grand halls of royal castles, imagine your character in
          vivid detail. Our advanced AI doesn&apos;t just stop at numbers and stats; it brings your adventurer to life
          with stunning generated character art. Witness your hero take form, ready to conquer whatever challenges lie
          ahead in their story.
        </LandingSection>
        <div className="flex flex-col gap-6 text-center">
          <LandingHeader className="mx-auto">Ready to create your character?</LandingHeader>
          <Button className="mx-auto px-6 font-semibold" color="primary" radius="sm" size="lg">
            <Link to="/tavern">Get Started</Link>
          </Button>
        </div>
        <footer className="mb-4 rounded-xl bg-stone-100 p-24 text-center text-2xl font-semibold shadow-lg dark:bg-zinc-900 lg:mb-8" />
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
