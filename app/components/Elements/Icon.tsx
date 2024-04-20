import { iconDictionary } from '@/utils/iconDictionary';

interface IconProps {
  icon: string;
}

const Icon = ({ icon }: IconProps) => {
  const IconComponent = iconDictionary[icon];

  if (!IconComponent) {
    throw new Error(`Icon: ${icon} does not exist`);
  }

  return <IconComponent />;
};

export { Icon };
