'use client';

import { SelectItem } from '@nextui-org/select';
import { useFormContext } from 'react-hook-form';

import { Pod } from '@/components/CharacterSheet/Pod';
import { FormSelect } from '@/components/Form/FormSelect';
import { StatIndex, useFormStat } from '@/hooks/useFormStat';
import { bonusify } from '@/utils/bonusify';
import { calcStatBonus } from '@/utils/calcStatBonus';
import { getProficencyBonus } from '@/utils/getProficencyBonus';

import { SpellList } from './SpellList';
import { spellStatOptions } from './spellTabConfig';

const spellCols = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9],
];

const PodDCClasses = { content: 'h-full w-full flex items-center justify-center' };

const SpellsTab = () => {
  const { getValues } = useFormContext();
  const statValue = useFormStat(getValues('spellStat') ?? StatIndex.Intelligence);

  const proficencyBonus = getProficencyBonus(getValues('level'));
  const statBonus = calcStatBonus(statValue);
  const spellSaveDC = 8 + proficencyBonus + statBonus;
  const spellAttackBonus = proficencyBonus + statBonus;

  return (
    <div className="flex-stack p-3">
      <Pod classNames={{ content: 'grid grid-cols-1 md:grid-cols-3 gap-3' }}>
        <Pod classNames={PodDCClasses} label="Spellcasting Ability" variant="alt">
          <FormSelect aria-label="Spellcasting Ability" name="spellStat">
            {spellStatOptions.map(({ key, value }) => (
              <SelectItem key={value} aria-label={key} value={value}>
                {key}
              </SelectItem>
            ))}
          </FormSelect>
        </Pod>
        <Pod classNames={PodDCClasses} label="Spell Save DC" variant="alt">
          <p className="text-2xl">{bonusify(Number.isNaN(spellSaveDC) ? 0 : spellSaveDC)}</p>
        </Pod>
        <Pod classNames={PodDCClasses} label="Spell Attack Bonus" variant="alt">
          <p className="text-2xl">{bonusify(Number.isNaN(spellAttackBonus) ? 0 : spellAttackBonus)}</p>
        </Pod>
      </Pod>

      <div className="flex w-full grid-flow-col flex-col items-start gap-3 lg:grid lg:grid-cols-3">
        {spellCols.map((col, i) => (
          <div key={i} className="flex w-full flex-col gap-3">
            {col.map((level) => (
              <Pod key={level} label={level === 0 ? 'Cantrips' : `Level ${level}`}>
                <SpellList level={level} />
              </Pod>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SpellsTab };
