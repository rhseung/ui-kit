import React from 'react';

import type { IconProps } from '@tabler/icons-react';
import { type VariantProps } from 'tailwind-variants';

import { Slot } from '@/components/slot';
import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { tv } from '@/utils';

import { isIconElement } from './icon';

interface BaseButtonProps {
  variant?: VariantProps<typeof baseButtonStyles>['variant'];
  size?: VariantProps<typeof baseButtonStyles>['size'];
  highContrast?: VariantProps<typeof baseButtonStyles>['highContrast'];
  color?: HueName;
  asChild?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  block?: boolean;
}

export interface IconButtonProps extends BaseButtonProps {
  children: React.ReactElement<IconProps>;
}

const baseButtonStyles = tv({
  base: 'text-title-4 inline-flex items-center justify-center rounded-lg whitespace-nowrap transition-colors duration-150 select-none',
  variants: {
    variant: {
      solid: 'bg-(--accent-9) text-(--accent-contrast) hover:bg-(--accent-10)',
      soft: 'bg-(--accent-a3) text-(--accent-a11) hover:bg-(--accent-a4)',
      outline:
        'text-(--accent-a11) inset-ring inset-ring-(--accent-a8) hover:bg-(--accent-a2)',
      ghost: 'text-(--accent-a11) hover:bg-(--accent-a3)',
    },
    size: {
      sm: 'gap-1.5 text-sm',
      md: 'gap-2',
      lg: 'gap-2.5 text-lg',
    },
    highContrast: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      highContrast: true,
      class:
        'bg-(--accent-12) text-(--gray-1) hover:bg-(--accent-12) hover:filter-(--filter-hover)',
    },
    {
      variant: 'soft',
      highContrast: true,
      class: 'text-(--accent-12)',
    },
    {
      variant: 'outline',
      highContrast: true,
      class:
        'text-(--accent-12) inset-ring-(--accent-12) hover:bg-(--accent-a2)',
    },
    {
      variant: 'ghost',
      highContrast: true,
      class: 'text-(--accent-12)',
    },
  ],
});

const buttonStyles = tv({
  extend: baseButtonStyles,
  variants: {
    size: {
      sm: 'px-3 py-2',
      md: 'px-3.5 py-2',
      lg: 'px-4 py-2.5',
    },
    block: {
      true: 'w-full',
      false: '',
    },
  },
});

const iconButtonStyles = tv({
  extend: baseButtonStyles,
  variants: {
    size: {
      sm: 'p-2',
      md: 'p-2',
      lg: 'p-2.5',
    },
  },
});

export const Button: React.FC<
  ButtonProps & Omit<React.ComponentProps<'button'>, 'data-accent'>
> = ({
  variant = 'solid',
  size = 'md',
  color,
  highContrast = false,
  block = false,
  asChild = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const { accent } = useTheme();

  const processedChildren = React.Children.map(children, (child) =>
    isIconElement(child)
      ? React.cloneElement(child, { size: child.props.size ?? size })
      : child,
  );

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-accent={color ?? accent}
      className={buttonStyles({
        size,
        variant,
        highContrast,
        block,
        className,
      })}
      {...props}
    >
      {processedChildren}
    </Comp>
  );
};

export const IconButton: React.FC<
  IconButtonProps & Omit<React.ComponentProps<'button'>, 'data-accent'>
> = ({
  variant = 'solid',
  size = 'md',
  color,
  highContrast = false,
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

  if (!isIconElement(children)) {
    throw new Error('IconButton must have an Icon component as a child');
  }

  const processedChildren = React.Children.map(children, (child) =>
    isIconElement(child)
      ? React.cloneElement(child, { size: child.props.size ?? size })
      : child,
  );

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-accent={color ?? accent}
      className={iconButtonStyles({ size, variant, highContrast, className })}
      {...props}
    >
      {processedChildren}
    </Comp>
  );
};
