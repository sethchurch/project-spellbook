import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tw-merge';

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};
