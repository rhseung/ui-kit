import React from 'react';

import type { VariantProps } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { cn, tv } from '@/utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: VariantProps<typeof inputStyles>['size'];
  color?: HueName;
  error?: VariantProps<typeof inputStyles>['error'];
}

// placeholder: --gray-a8
// text-selection: --accent-a5
// text-color: --accent-12? --gray-12?
// inset-ring: 1px --gray-a7
// inset-ring-focus: 2px --accent-8

const inputStyles = tv({
  base: 'text-body w-full rounded-xl border-none px-3.5 shadow-none focus:outline-none',
  variants: {
    size: {
      sm: 'py-2 text-sm',
      md: 'py-2.5',
      lg: 'py-3 text-lg',
    },
    error: {
      true: '', // TODO: error style
      false: cn(
        'text-(--gray-12) inset-ring inset-ring-(--gray-a7) selection:bg-(--accent-a5) placeholder:text-(--gray-a8)',
        'focus:inset-ring-2 focus:inset-ring-(--accent-8)',
        // TODO: 'disabled:'
      ),
    },
  },
});

// TODO: input type 디자인 전부 고려 (ex. number, search, date, time, datetime-local, month, week, color, range, file)

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', color, error = false, className, ...props }, ref) => {
    const { accent } = useTheme();

    return (
      <input
        ref={ref}
        data-accent={color ?? accent}
        className={inputStyles({ size, error, className })}
        {...props}
      />
    );
  },
);
