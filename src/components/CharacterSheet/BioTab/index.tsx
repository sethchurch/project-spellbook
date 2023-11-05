'use client';

import { camelCase } from 'lodash';
import { useFormContext } from 'react-hook-form';

import { FormInput } from '@/components/Form/FormInput';
import { Textarea } from '@/components/Form/Textarea';

import { Pod } from '../Pod';

const BioTab = () => {
  const { getValues } = useFormContext();
  const characterName = getValues('name');
  return (
    <div className="flex min-h-full flex-col justify-start gap-3 p-3">
      <Pod label={`${characterName}'s Details`}>
        <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
          {['Age', 'Height', ' Weight', 'Eye Color', 'Skin Color', 'Hair Color'].map((field) => (
            <FormInput key={field} label={field} name={`bio.${camelCase(field)}`} styleVariant="basic" />
          ))}
        </div>
      </Pod>
      <div className="grid grow grid-cols-[1fr_2fr] grid-rows-3 gap-3">
        <Pod label="Apperance" />
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
