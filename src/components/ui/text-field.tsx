import React from 'react';

import type { VariantProps } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { tv } from '@/utils';

export const textFieldStyles = tv({
  base: 'text-body w-full text-(--gray-12) shadow-none selection:bg-(--accent-a5) placeholder:text-(--gray-a8) focus:outline-none disabled:opacity-50',
  variants: {
    variant: {
      surface:
        'rounded-lg px-3.5 inset-ring inset-ring-(--gray-a7) focus:inset-ring-2 focus:inset-ring-(--accent-8)',
      underline:
        'rounded-none border-b border-(--gray-a7) px-1 focus:border-b-2 focus:border-(--accent-8)',
    },
    size: {
      sm: 'py-2 text-sm',
      md: 'py-2.5',
      lg: 'py-2.5 text-lg',
    },
    error: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'surface',
      error: true,
      class: 'inset-ring-danger inset-ring-2',
    },
    {
      variant: 'underline',
      error: true,
      class: 'border-danger border-b-2',
    },
  ],
});

export interface TextFieldProps {
  variant?: VariantProps<typeof textFieldStyles>['variant'];
  size?: VariantProps<typeof textFieldStyles>['size'];
  color?: HueName;
  error?: VariantProps<typeof textFieldStyles>['error'];
}

export const TextField = React.forwardRef<
  HTMLInputElement,
  TextFieldProps & Omit<React.ComponentProps<'input'>, 'size' | 'data-accent'>
>(
  (
    {
      variant = 'surface',
      size = 'md',
      color,
      error = false,
      className,
      ...props
    },
    ref,
  ) => {
    const { accent } = useTheme();

    return (
      <input
        ref={ref}
        data-accent={color ?? accent}
        className={textFieldStyles({ variant, size, error, className })}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  },
);

TextField.displayName = 'TextField';
