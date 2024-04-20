import type { AccordionProps as NextAccordionProps } from '@nextui-org/accordion';
import { Accordion as NextAccordion } from '@nextui-org/accordion';

const styleVariants = {
  podSplit: {
    title: 'py-0',
    base: 'group-[.is-splitted]:shadow-none',
    titleWrapper: 'p-0',
    content: 'pb-2 pt-0',
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
      textValue="Accordion"
      variant="splitted"
      {...props}
    >
      {children}
    </NextAccordion>
  );
};

export { Accordion };
