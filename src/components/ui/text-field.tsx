import React, { createContext, useContext } from 'react';

import type { VariantProps } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { cn, tv } from '@/utils';

import { isIconElement } from './icon';

export const textFieldStyles = tv({
  base: 'text-body text-foreground flex w-full items-center gap-2 shadow-none has-focus:outline-none',
  variants: {
    variant: {
      surface:
        'rounded-lg px-3.5 inset-ring inset-ring-(--gray-a7) has-focus:inset-ring-2 has-focus:inset-ring-(--accent-8)',
      underline:
        'rounded-none border-b border-(--gray-a7) px-1 py-1.5 has-focus:border-(--accent-8) has-focus:shadow-[inset_0_-1px_0_0_var(--accent-8)]',
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
    disabled: {
      true: 'opacity-50',
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
  disabled?: boolean;
}

interface TextFieldOriginalProps
  extends Omit<
    React.ComponentProps<'input'>,
    'data-accent' | 'size' | 'disabled'
  > {}

interface TextFieldContextValue extends TextFieldOriginalProps {
  color: NonNullable<TextFieldProps['color']>;
}

export const TextFieldContext = createContext<TextFieldContextValue>(
  {} as TextFieldContextValue,
);

const TextFieldImpl: React.FC<TextFieldProps & TextFieldOriginalProps> = ({
  variant = 'surface',
  size = 'md',
  color,
  error = false,
  disabled = false,
  className,
  children = <TextField.Entry />,
  ...props
}) => {
  const { accent } = useTheme();
  const computedColor = color ?? accent;

  const hasInner = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === TextField.Entry,
  );
  if (!hasInner) {
    throw new Error(
      'TextField must have a TextField.Entry component as a child',
    );
  }

  const processedChildren = React.Children.map(children, (child) =>
    isIconElement(child)
      ? React.cloneElement(child, { size: child.props.size ?? size })
      : child,
  );

  return (
    <TextFieldContext.Provider value={{ color: computedColor, ...props }}>
      <div
        data-accent={computedColor}
        aria-disabled={disabled}
        className={textFieldStyles({
          variant,
          size,
          error,
          disabled,
          className,
        })}
      >
        {processedChildren}
      </div>
    </TextFieldContext.Provider>
  );
};

interface TextFieldInnerProps {
  className?: string;
}

const TextFieldEntry = React.forwardRef<HTMLInputElement, TextFieldInnerProps>(
  ({ className }, ref) => {
    const context = useContext(TextFieldContext);
    if (!context) {
      throw new Error('TextField.Entry must be used within a TextField');
    }

    const { color, ...props } = context;

    return (
      <input
        ref={ref}
        data-accent={color}
        className={cn(
          'selection:bg-(--accent-a5) placeholder:text-(--gray-a8)',
          'text-body text-foreground rounded-none border-0 p-0 shadow-none focus:shadow-none',
          className,
        )}
        {...props}
      />
    );
  },
);

export const TextField = Object.assign(TextFieldImpl, {
  Entry: TextFieldEntry,
});
