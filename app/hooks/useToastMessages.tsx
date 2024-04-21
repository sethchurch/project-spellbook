import { useSearchParams } from '@remix-run/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const useToastMessages = (id: string) => {
  const [searchParams] = useSearchParams();
  const error = searchParams.get('error');
  const message = searchParams.get('message');

  useEffect(() => {
    if (error) {
      toast.error(error, { id: `${id}-error` });
    }
    if (message) {
      toast.success(message, { id: `${id}-message` });
    }
  }, [error, id, message]);

  return null;
};

export { useToastMessages };
