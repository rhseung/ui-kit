import React from 'react';

import type { VariantProps } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { tv } from '@/utils';

export interface TextFieldProps {
  size?: VariantProps<typeof textFieldStyles>['size'];
  color?: HueName;
  error?: VariantProps<typeof textFieldStyles>['error'];
}

export const textFieldStyles = tv({
  base: 'text-body w-full rounded-xl border-none px-3.5 text-(--gray-12) shadow-none selection:bg-(--accent-a5) placeholder:text-(--gray-a8) focus:outline-none',
  variants: {
    size: {
      sm: 'py-2 text-sm',
      md: 'py-2.5',
      lg: 'py-3 text-lg',
    },
    error: {
      true: 'inset-ring-2 inset-ring-(--red-11)',
      false:
        'inset-ring inset-ring-(--gray-a7) focus:inset-ring-2 focus:inset-ring-(--accent-8) disabled:opacity-50',
    },
  },
});

export const TextField = React.forwardRef<
  HTMLInputElement,
  TextFieldProps & Omit<React.ComponentProps<'input'>, 'size' | 'data-accent'>
>(({ size = 'md', color, error = false, className, ...props }, ref) => {
  const { accent } = useTheme();

  return (
    <input
      ref={ref}
      data-accent={color ?? accent}
      className={textFieldStyles({ size, error, className })}
      {...props}
    />
  );
});
