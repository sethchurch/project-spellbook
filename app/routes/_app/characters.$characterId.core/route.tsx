import { zodResolver } from '@hookform/resolvers/zod';
import type { ActionFunction, ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { RemixFormProvider, useRemixForm } from 'remix-hook-form';
import * as zod from 'zod';

import { Pod } from '@/components/Elements/Pod';
import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { BasicErrorBoundary } from '@/components/Layout/ErrorBoundary';
import { requireAuthSession } from '@/features/auth/utils/session.server';
import { CoreTab as CharacterSheetCoreTab } from '@/features/characters';
import { getCharacter } from '@/features/characters/utils/characterService.server';
import { camelCase } from '@/utils/misc';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const session = await requireAuthSession(request);
  const { userId } = session;
  const { characterId } = params;

  if (!characterId) throw redirect('/tavern');
  const coreSheetData = await getCharacter(userId, characterId, {
    include: {
      deathSaves: true,
      skills: true,
      stats: true,
      hitDice: true,
      hitPoints: true,
      features: true,
      attacks: true,
      resources: true,
      proficiencies: true,
      bio: {
        select: {
          personalityTraits: true,
          ideals: true,
          bonds: true,
          flaws: true,
        },
      },
    },
  });

  return { characterId, character: coreSheetData };
};

const schema = zod.object({
  name: zod.string().min(1),
  background: zod.string().min(1),
});

type CoreFormData = zod.infer<typeof schema>;
const resolver = zodResolver(schema);

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  // const { errors, data, receivedValues: defaultValues } = await getValidatedFormData<FormData>(request, resolver);
  return null;
};

export default function CoreTabTest() {
  const fetcher = useFetcher();
  const { character } = useLoaderData<typeof loader>();

  function validSubmit(data: object) {
    console.log({ data });
  }

  const remixForm = useRemixForm<CoreFormData>({
    mode: 'onChange',
    defaultValues: character,
    resolver,
    submitHandlers: {
      onValid(data) {
        validSubmit(data);
      },
    },
  });

  const { handleSubmit } = remixForm;

  const onChange = () => {
    handleSubmit();
  };

  return (
    <RemixFormProvider {...remixForm}>
      <fetcher.Form method="POST" onChange={onChange} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 grid-rows-[1fr_max-content] gap-x-2 gap-y-3 p-2 md:gap-3 md:p-5 lg:grid-cols-[6fr_3fr] xl:grid-cols-[2fr_6fr_2fr]">
          <Pod className="xl:col-span-2" label="Character Details">
            <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
              {['Name', 'Race', 'Level', 'Class', 'Background', 'Alignment'].map((field) => {
                return <FormInput key={field} label={field} name={field.toLowerCase()} styleVariant="basic" />;
              })}
            </div>
          </Pod>
        </div>
        {/* Bio & Proficiencies */}
        <div className="col-span-1 flex h-full flex-col gap-x-2 gap-y-3 md:gap-3 lg:col-span-2 xl:col-span-1">
          {['Personality Traits', 'Ideals', 'Bonds', 'Flaws'].map((x) => (
            <Pod key={x} label={x}>
              <Textarea name={`bio.${camelCase(x)}`} />
            </Pod>
          ))}
          <Pod label="Proficiencies & Languages">
            <div className="flex-stack">
              {['Languages', 'Weapons', 'Armor', 'Other'].map((x) => (
                <FormInput key={x} label={x} name={`proficiencies.${camelCase(x)}`} styleVariant="basic" />
              ))}
            </div>
          </Pod>
        </div>
      </fetcher.Form>
    </RemixFormProvider>
  );
}

const CoreTab = () => {
  const { character } = useLoaderData<typeof loader>();
  return <CharacterSheetCoreTab character={character} />;
};

export { CoreTab };

export const ErrorBoundary = () => {
  return <BasicErrorBoundary />;
};

export type CoreTabDefaultValue = Awaited<ReturnType<typeof loader>>['character'];
