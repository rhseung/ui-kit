import React from 'react';

import type { VariantProps } from 'tailwind-variants';

import { useTheme } from '@/hooks/use-theme';
import type { HueName } from '@/styles/colors';
import { tv } from '@/utils';

// TODO: input type에 따라 return <PasswordInput />, <SearchInput />, <EmailInput />, <NumberInput />, <TelInput />, <UrlInput />, <DateInput />, <TimeInput />, <DateTimeInput />, <MonthInput />, <WeekInput />, <ColorInput />, <RangeInput />, <FileInput /> 등을 반환하도록 수정
export interface InputProps {
  size?: VariantProps<typeof inputStyles>['size'];
  color?: HueName;
  error?: VariantProps<typeof inputStyles>['error'];
}

export const inputStyles = tv({
  base: 'text-body w-full rounded-xl border-none px-3.5 text-(--gray-12) shadow-none selection:bg-(--accent-a5) placeholder:text-(--gray-a8) focus:outline-none',
  variants: {
    size: {
      sm: 'py-2 text-sm',
      md: 'py-2.5',
      lg: 'py-3 text-lg',
    },
    error: {
      true: 'inset-ring-2 inset-ring-(--red-11)',
      false:
        'inset-ring inset-ring-(--gray-a7) focus:inset-ring-2 focus:inset-ring-(--accent-8) disabled:opacity-50',
    },
  },
});

// TODO: input type 디자인 전부 고려 (ex. number, search, date, time, datetime-local, month, week, color, range, file)

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & Omit<React.ComponentProps<'input'>, 'size'>
>(({ size = 'md', color, error = false, className, ...props }, ref) => {
  const { accent } = useTheme();

  return (
    <input
      ref={ref}
      data-accent={color ?? accent}
      className={inputStyles({ size, error, className })}
      {...props}
    />
  );
});
