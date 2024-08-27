'use client';

import { type ComponentProps, useState } from 'react';
import { Input } from './ui/input';
import { Eye, EyeOff } from 'lucide-react';

type Props = ComponentProps<'input'>;

export const MultiIput = ({ ...props }: Props) => {
  const [showPass, setShow] = useState(false);

  const showPassword = () => {
    setShow((show) => !show);
  };

  return (
    <div className="flex relative bg-gray-gray8 focus-within:text-main-green border-gray-gray7">
      <Input {...props} type={showPass ? 'text' : 'password'} />
      <span className="absolute inset-y-0 right-0 flex items-center pl-1">
        <button
          type="button"
          className="pr-4 focus:outline-none focus:shadow-outline"
          onClick={showPassword}
          id="showPassword"
        >
          {showPass ? (
            <Eye size={15} className="text-gray-800" />
          ) : (
            <EyeOff size={15} className="text-gray-800" />
          )}
        </button>
      </span>
    </div>
  );
};
