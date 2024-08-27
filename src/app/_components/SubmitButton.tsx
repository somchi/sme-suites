'use client';

import { useEffect, useState, type ComponentProps } from 'react';
import ButtonLoader from './ui/button-loader';
import { Button } from './ui/button';

type Props = ComponentProps<'button'> & { message: any };

export function SubmitButton({ children, message, ...props }: Props) {
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      setPending(true);
    };

    let mounted = true;
    if (mounted) {
      window.addEventListener('submit', handleClick);
    }
    return () => {
      mounted = false;
      window.removeEventListener('submit', handleClick);
    };
  }, []);

  const handleUpdate = () => {
    if (isPending && message?.message) {
      setPending(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      handleUpdate();
    }
    return () => {
      mounted = false;
    };
  }, [message]);

  return (
    <Button
      disabled={isPending}
      variant={'primary'}
      data-testid="signIn"
      className="w-80"
      {...props}
      type="submit"
      //   aria-disabled={isPending}
    >
      {isPending ? <ButtonLoader /> : children}
    </Button>
  );
}
