import { useEffect, useRef, useCallback } from 'react';

type Props = {
  toggleVisibility: () => void;
  msg: string;
  time?: number;
};

export const SnackBar = ({ msg, toggleVisibility, time = 2000 }: Props) => {
  let timer: any = useRef();

  const closeHandler = useCallback(() => {
    clearTimeout(timer);
    toggleVisibility();
  }, [toggleVisibility]);

  useEffect(() => {
    const displayHandler = () => {
      timer.currrent = setTimeout(() => {
        closeHandler();
      }, time);
    };
    displayHandler();
  }, [closeHandler, time]);

  return (
    <div
      id="snackbar"
      className="flex justify-between items-center bg-theme-secondary w-[280px]
       md:w-80 rounded-xl py-1 px-5 absolute top-20 z-[99] right-0 sm:right-5"
    >
      <div className="text-sm font-medium text-white">{msg}</div>
      <div
        className="text-2xl text-white font-bold cursor-pointer"
        onClick={() => closeHandler()}
      >
        &times;
      </div>
    </div>
  );
};
