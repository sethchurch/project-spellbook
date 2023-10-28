import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{ style: { borderRadius: '10px', background: '#333', color: '#fff' } }}
      />
      {children}
    </>
  );
};

export { ToastProvider };
