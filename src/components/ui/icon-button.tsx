import React from 'react';

import { type VariantProps, tv } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';

import { Slot } from '../slot';
import { type ButtonVariant, baseButtonStyles } from './button';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: ButtonVariant;
  size?: VariantProps<typeof iconButtonStyles>['size'];
  color?: HueName;
  asChild?: boolean;
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

export const iconButtonStyles = tv({
  extend: baseButtonStyles,
  variants: {
    size: {
      xs: 'p-1.5',
      sm: 'p-2',
      md: 'p-2',
      lg: 'p-2.5',
      xl: 'p-3',
    },
  },
});

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'solid',
  size = 'md',
  color,
  asChild = false,
  className,
  children,
  ...props
}) => {
  const { accent } = useTheme();

  if (React.Children.count(children) !== 1) {
    throw new Error(
      'IconButton must have exactly one child element (an Icon component)',
    );
  }

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-accent={color ?? accent}
      className={iconButtonStyles({ size, variant, className })}
      {...props}
    >
      {children}
    </Comp>
  );
};
