import React, { createContext, useContext } from 'react';

import { useTheme } from '@/hooks/use-theme';
import { cn, tv } from '@/utils';

import { isIconElement } from './ui/icon';
import {
  TextField,
  type TextFieldProps,
  textFieldStyles,
} from './ui/text-field';

// TODO: underline variant
export const textFieldGroupStyles = tv({
  extend: textFieldStyles,
  base: 'flex items-center gap-2',
  variants: {
    error: {
      true: 'inset-ring-2 inset-ring-(--red-11)',
      false:
        'inset-ring inset-ring-(--gray-a7) has-focus:inset-ring-2 has-focus:inset-ring-(--accent-8)',
    },
    disabled: {
      true: 'opacity-50',
      false: '',
    },
  },
});

export interface TextFieldGroupProps extends TextFieldProps {
  disabled?: boolean;
}

const TextFieldGroupContext = createContext<TextFieldGroupProps>({
  size: 'md',
  color: undefined,
  error: false,
  disabled: false,
});

const TextFieldGroup: React.FC<
  TextFieldGroupProps & Omit<React.ComponentProps<'div'>, 'data-accent'>
> = ({
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
      value={{ size, color: computedColor, error, disabled }}
    >
      <div
        data-accent={computedColor}
        className={textFieldGroupStyles({
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
    'size' | 'color' | 'disabled' | 'data-accent'
  >
>(({ className, ...props }, ref) => {
  const { size, color, error, disabled } = useContext(TextFieldGroupContext);

  return (
    <TextField
      ref={ref}
      size={size}
      color={color}
      error={error}
      disabled={disabled}
      className={cn(
        'rounded-none border-none p-0 inset-ring-0 focus:inset-ring-0',
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
