import React from 'react';

import type { IconProps } from '@tabler/icons-react';
import { type VariantProps, tv } from 'tailwind-variants';

import { Slot } from '@/components/slot';
import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';

import { isIconElement } from './icon';

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof baseButtonStyles>['variant'];
  color?: HueName;
  asChild?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  size?: VariantProps<typeof buttonStyles>['size'];
  block?: boolean;
}

export interface IconButtonProps extends BaseButtonProps {
  size?: VariantProps<typeof iconButtonStyles>['size'];
  children: React.ReactElement<IconProps>;
}

const baseButtonStyles = tv({
  base: 'inline-flex items-center justify-center rounded-xl font-medium whitespace-nowrap transition-colors duration-150 select-none',
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
});

const buttonStyles = tv({
  extend: baseButtonStyles,
  variants: {
    size: {
      sm: 'gap-1.5 px-3 py-2 text-sm',
      md: 'gap-2 px-3.5 py-2 text-base',
      lg: 'gap-2.5 px-4 py-2.5 text-lg',
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

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  color,
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
        block,
        className,
      })}
      {...props}
    >
      {processedChildren}
    </Comp>
  );
};

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
      className={iconButtonStyles({ size, variant, className })}
      {...props}
    >
      {processedChildren}
    </Comp>
  );
};
