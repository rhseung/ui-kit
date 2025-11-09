import React from 'react';

import type { VariantProps } from 'tailwind-variants';

import { tv } from '@/utils';

export const labelStyles = tv({
  base: 'text-caption text-muted-foreground select-none',
  variants: {
    size: {
      sm: 'text-xs',
      md: '',
      lg: 'text-body',
    },
    error: {
      true: 'text-danger',
      false: '',
    },
    required: {
      true: 'after:text-danger after:ml-0.5 after:content-["*"]',
      false: '',
    },
  },
});

export interface LabelProps
  extends Omit<React.ComponentProps<'label'>, 'size'> {
  size?: VariantProps<typeof labelStyles>['size'];
  error?: VariantProps<typeof labelStyles>['error'];
  required?: VariantProps<typeof labelStyles>['required'];
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    { size = 'md', error = false, required = false, className, ...props },
    ref,
  ) => {
    return (
      <label
        ref={ref}
        className={labelStyles({ size, error, required, className })}
        {...props}
      />
    );
  },
);

Label.displayName = 'Label';
