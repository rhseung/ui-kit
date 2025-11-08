import React, { createContext, useContext } from 'react';

import { useTheme } from '@/hooks/use-theme';
import { cn, tv } from '@/utils';

import { Input, type InputProps, inputStyles } from './input';

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

export const InputGroup: React.FC<
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
          className: cn('flex items-center gap-3.5', className),
        })}
        {...props}
      >
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};

export const InputGroupInput = React.forwardRef<
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

// export interface InputGroupAdornmentProps {
//   className?: string;
// }

// export const InputGroupAdornment: React.FC<
//   PropsWithChildren<InputGroupAdornmentProps>
// > = ({ className, children }) => {
//   const context = useContext(InputGroupContext);
//   const { size } = context;

//   return (
//     <div
//       className={cn(
//         'text-body flex items-center justify-center px-3 text-(--gray-11)',
//         'bg-(--gray-2) inset-ring inset-ring-(--gray-a7)',
//         size === 'sm' && 'py-2 text-sm',
//         size === 'md' && 'py-2.5',
//         size === 'lg' && 'py-3 text-lg',
//         position === 'start' && 'rounded-l-xl rounded-r-none',
//         position === 'end' && 'rounded-l-none rounded-r-xl',
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };
