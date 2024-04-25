import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';

const disableTabIndex = (node: Element) => {
  node.setAttribute('tabindex', '-1');
  node.setAttribute('aria-hidden', 'true');
  node.setAttribute('disabled', 'true');
};

const DisableTabIndex = ({ children }: PropsWithChildren) => {
  const componentRef = useRef(null);
  const effectRanRef = useRef(false);

  useEffect(() => {
    if (effectRanRef.current || !componentRef.current) return;
    const parent = componentRef.current as HTMLElement;
    const focusableElements = parent.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusableElements.forEach(disableTabIndex);
    effectRanRef.current = true;
  }, []);

  return <div ref={componentRef}>{children}</div>;
};

export { DisableTabIndex };
