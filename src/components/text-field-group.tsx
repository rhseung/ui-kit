import React, { createContext, useContext } from 'react';

import { useTheme } from '@/hooks/use-theme';
import { cn, tv } from '@/utils';

import { isIconElement } from './ui/icon';
import {
  TextField,
  type TextFieldProps,
  textFieldStyles,
} from './ui/text-field';

export const textFieldGroupStyles = tv({
  extend: textFieldStyles,
  base: 'flex items-center gap-2',
  variants: {
    disabled: {
      true: 'opacity-50',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'surface',
      error: true,
      class: 'inset-ring-2 inset-ring-(--red-11)',
    },
    {
      variant: 'surface',
      error: false,
      class:
        'inset-ring inset-ring-(--gray-a7) has-focus:inset-ring-2 has-focus:inset-ring-(--accent-8)',
    },
    {
      variant: 'underline',
      error: true,
      class: 'border-(--red-11)',
    },
    {
      variant: 'underline',
      error: false,
      class: 'border-(--gray-a7) has-focus:border-(--accent-8)',
    },
  ],
});

export interface TextFieldGroupProps extends TextFieldProps {
  disabled?: boolean;
}

const TextFieldGroupContext = createContext<TextFieldGroupProps>({
  variant: 'surface',
  size: 'md',
  color: undefined,
  error: false,
  disabled: false,
});

const TextFieldGroup: React.FC<
  TextFieldGroupProps & Omit<React.ComponentProps<'div'>, 'data-accent'>
> = ({
  variant = 'surface',
  size = 'md',
  color,
  error = false,
  disabled = false,
  className,
  children,
  ...props
}) => {
  const { accent } = useTheme();
  const computedColor = color ?? accent;

  const processedChildren = React.Children.map(children, (child) =>
    isIconElement(child)
      ? React.cloneElement(child, { size: child.props.size ?? size })
      : child,
  );

  return (
    <TextFieldGroupContext.Provider
      value={{ variant, size, color: computedColor, error, disabled }}
    >
      <div
        data-accent={computedColor}
        className={textFieldGroupStyles({
          variant,
          size,
          error,
          disabled,
          className,
        })}
        {...props}
      >
        {processedChildren}
      </div>
    </TextFieldGroupContext.Provider>
  );
};

const InnerTextField = React.forwardRef<
  HTMLInputElement,
  Omit<
    TextFieldProps & React.ComponentProps<'input'>,
    'size' | 'color' | 'disabled' | 'variant' | 'data-accent'
  >
>(({ className, ...props }, ref) => {
  const { variant, size, color, error, disabled } = useContext(
    TextFieldGroupContext,
  );

  return (
    <TextField
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      error={error}
      disabled={disabled}
      className={cn(
        'rounded-none border-0 p-0 inset-ring-0 focus:inset-ring-0',
        className,
      )}
      {...props}
    />
  );
});

const TextFieldGroupImpl = Object.assign(TextFieldGroup, {
  TextField: InnerTextField,
});

export { TextFieldGroupImpl as TextFieldGroup };
