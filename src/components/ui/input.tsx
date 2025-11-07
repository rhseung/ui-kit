import React from 'react';

import { cn, tv } from '@/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const inputStyles = tv({});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'text-body inset-ring- w-full rounded-lg px-4 py-3',
          'shadow-none inset-ring-2 focus:inset-ring-2 focus:outline-none',
          error && 'inset-ring-2',
          'bg-input-bg-default text-input-fg-default inset-ring-input-border-default',
          'placeholder:text-input-fg-default',
          'focus:bg-input-bg-focused focus:text-input-fg-focused focus:inset-ring-input-border-focused',
          'disabled:bg-input-bg-disabled disabled:text-input-fg-disabled disabled:inset-ring-input-border-disabled',
          error &&
            'bg-input-bg-error text-input-fg-error inset-ring-input-border-error',
          className,
        )}
        {...props}
      />
    );
  },
);
