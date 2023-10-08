import type { AccordionProps as NextAccordionProps } from '@nextui-org/react';
import { Accordion as NextAccordion } from '@nextui-org/react';

const styleVariants = {
  podSplit: {
    title: 'py-0',
    base: 'group-[.is-splitted]:shadow-none',
    titleWrapper: 'p-0',
    content: 'py-3',
  },
};

interface AccordionProps extends NextAccordionProps {
  styleVariant?: keyof typeof styleVariants;
}

const Accordion = ({ styleVariant, children, ...props }: AccordionProps) => {
  return (
    <NextAccordion
      isCompact
      className="flex-stack px-0"
      itemClasses={styleVariant ? styleVariants[styleVariant] : {}}
      selectionMode="multiple"
      variant="splitted"
      {...props}
    >
      {children}
    </NextAccordion>
  );
};

export { Accordion };
