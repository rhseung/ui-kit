import React from 'react';

import type { VariantProps } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { tv } from '@/utils';

export const textFieldStyles = tv({
  base: 'text-body text-foreground w-full shadow-none selection:bg-(--accent-a5) placeholder:text-(--gray-a8) focus:outline-none disabled:opacity-50',
  variants: {
    variant: {
      surface:
        'rounded-lg px-3.5 inset-ring inset-ring-(--gray-a7) focus:inset-ring-2 focus:inset-ring-(--accent-8)',
      underline:
        'rounded-none border-b border-(--gray-a7) px-1 py-1.5 focus:border-(--accent-8) focus:shadow-[inset_0_-1px_0_0_var(--accent-8)]',
    },
    size: {
      sm: 'text-sm',
      md: '',
      lg: 'text-lg',
    },
    error: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'surface',
      size: 'sm',
      class: 'py-2',
    },
    {
      variant: 'surface',
      size: 'md',
      class: 'py-2.5',
    },
    {
      variant: 'surface',
      size: 'lg',
      class: 'py-2.5',
    },
    {
      variant: 'surface',
      error: true,
      class: 'inset-ring-danger inset-ring-2',
    },
    {
      variant: 'underline',
      error: true,
      class: 'border-danger shadow-[inset_0_-1px_0_0_var(--color-danger)]',
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
