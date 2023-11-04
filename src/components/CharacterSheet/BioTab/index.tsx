import { Chip } from '@nextui-org/chip';

import { Textarea } from '@/components/Form/Textarea';

import { Pod } from '../Pod';

const BioTab = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-start gap-3 p-3">
      <Chip size="lg">More coming soon to the inventory page!</Chip>
      <Pod className="grow self-stretch" label="Backstory">
        <Textarea maxRows={64} minRows={500} name="backstory" />
      </Pod>
    </div>
  );
};

export { BioTab };
