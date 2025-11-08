import React, { createContext, useContext } from 'react';

import { useTheme } from '@/hooks/use-theme';
import { cn, tv } from '@/utils';

import { isIconElement } from './ui/icon';
import { Input, type InputProps, inputStyles } from './ui/input';

export interface InputGroupProps extends InputProps {
  disabled?: boolean;
}

const InputGroupContext = createContext<InputGroupProps>({
  size: 'md',
  color: undefined,
  error: false,
  disabled: false,
});

export const inputGroupStyles = tv({
  extend: inputStyles,
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

const InputGroupImpl: React.FC<
  InputGroupProps & React.ComponentProps<'div'>
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
    <InputGroupContext.Provider
      value={{ size, color: computedColor, error, disabled }}
    >
      <div
        data-accent={computedColor}
        className={inputGroupStyles({
          size,
          error,
          disabled,
          className,
        })}
        {...props}
      >
        {processedChildren}
      </div>
    </InputGroupContext.Provider>
  );
};

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  Omit<
    InputProps & React.ComponentProps<'input'>,
    'size' | 'type' | 'data-accent' | 'color' | 'disabled'
  >
>(({ className, ...props }, ref) => {
  const { size, color, error, disabled } = useContext(InputGroupContext);

  return (
    <Input
      ref={ref}
      size={size}
      color={color}
      error={error}
      disabled={disabled}
      className={cn(
        'rounded-none border-0 border-none p-0 inset-ring-0 focus:inset-ring-0',
        className,
      )}
      {...props}
    />
  );
});

export const InputGroup = Object.assign(InputGroupImpl, {
  Input: InputGroupInput,
});
