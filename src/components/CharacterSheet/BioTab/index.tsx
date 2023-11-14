'use client';

import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';
import { camelCase } from '@/utils/camelCase';

import { Pod } from '../Pod';

const BioTab = () => {
  const { getValues } = useFormContext();
  const characterName = getValues('name');
  return (
    <div className="flex min-h-full flex-col justify-start gap-3 p-3">
      <Pod
        disableLoading
        classNames={{ content: 'grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3' }}
        label={`${characterName}'s Details`}
      >
        {['Age', 'Height', ' Weight', 'Eye Color', 'Skin Color', 'Hair Color'].map((field) => (
          <FormInput key={field} label={field} name={`bio.${camelCase(field)}`} styleVariant="basic" />
        ))}
      </Pod>
      <div className="grid grow grid-cols-1 grid-rows-[max-content_max-content_max-content] gap-3 lg:grid-cols-[1fr_2fr]">
        <Pod label="Apperance">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-r from-violet-700 to-violet-950">
            <Image
              fill
              alt="image of character"
              className="block"
              sizes="100px"
              src="https://picsum.photos/2048/1024"
            />
          </div>
        </Pod>
        <Pod label="Organizations">
          <Textarea maxRows={32} minRows={8} name="bio.organizations" styleVariant="grow" />
        </Pod>
        <Pod className="row-span-2" label="Backstory">
          <Textarea maxRows={64} minRows={32} name="backstory" styleVariant="grow" />
        </Pod>
        <Pod label="Features & Traits">
          <Textarea maxRows={32} minRows={8} name="bio.featuresTraits" styleVariant="grow" />
        </Pod>
        <Pod label="Treasure">
          <Textarea maxRows={32} minRows={8} name="bio.treasure" styleVariant="grow" />
        </Pod>
      </div>
    </div>
  );
};

export { BioTab };
