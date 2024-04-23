import { useFormContext } from 'react-hook-form';

import { Pod } from '@/components/Elements/Pod';
import { statNames } from '@/config/dummyData';

interface StatDisplayProviderProps {
  name?: string;
  render: (stat: number) => JSX.Element;
}

const StatDisplayProvider = ({ render, name = 'stats' }: StatDisplayProviderProps) => {
  const { getValues } = useFormContext();
  const statList = getValues(name) || [];

  return (
    <>
      {statList.map((stat: number, index: number) => (
        <Pod key={index} className="aspect-square max-w-xl" label={statNames[index]?.toUpperCase()} variant="alt">
          {render(stat)}
        </Pod>
      ))}
    </>
  );
};

export { StatDisplayProvider };
