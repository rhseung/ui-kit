import React from 'react';

import { type VariantProps, tv } from 'tailwind-variants';

import { Slot } from '@/components/slot';
import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { cn } from '@/utils/cn';

export type ButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost'; // TODO: | 'plain';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: VariantProps<typeof buttonStyles>['size'];
  color?: HueName;
  asChild?: boolean;
}

export const baseButtonStyles = tv({
  base: 'text-title-4 inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-150 select-none',
  variants: {
    variant: {
      solid:
        'bg-(--accent-9) text-(--accent-contrast) hover:bg-(--accent-10) active:bg-(--accent-11)',
      soft: 'bg-(--accent-a3) text-(--accent-a11) hover:bg-(--accent-a4)',
      outline:
        'text-(--accent-a11) inset-ring inset-ring-(--accent-a8) hover:bg-(--accent-a2)',
      ghost: 'text-(--accent-a11) hover:bg-(--accent-a3)',
    },
  },
  defaultVariants: { variant: 'solid', size: 'md' },
});

export const buttonStyles = tv({
  extend: baseButtonStyles,
  variants: {
    size: {
      xs: 'px-3 py-1.5',
      sm: 'px-3 py-2',
      md: 'px-4 py-2',
      lg: 'px-5 py-2.5',
      xl: 'px-6 py-3',
      block: 'w-full px-5 py-3',
    },
  },
});

// TODO: with icon and text
export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  color,
  asChild = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const { accent } = useTheme();

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-accent={color ?? accent}
      className={buttonStyles({ size, variant, className })}
      {...props}
    >
      {children}
    </Comp>
  );
};
