import { cn } from '@/app/_utils/utils';
import React from 'react';

export interface DivProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const FormControl = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('grid my-4 w-full', className)} ref={ref} {...props} />
    );
  }
);

FormControl.displayName = 'FormControl';

export { FormControl };
