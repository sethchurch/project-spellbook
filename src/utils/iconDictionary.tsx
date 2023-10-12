import { IconChevronLeft, IconHome, IconMenu2, IconMoon, IconPlus, IconSun, IconWand } from '@tabler/icons-react';

interface IconDictionary {
  [key: string]: React.FC;
}

const iconDictionary: IconDictionary = {
  chevronLeft: IconChevronLeft,
  plus: IconPlus,
  sun: IconSun,
  moon: IconMoon,
  menu: IconMenu2,
  wand: IconWand,
  home: IconHome,
};

export { iconDictionary };
