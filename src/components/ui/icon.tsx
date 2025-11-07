import * as React from 'react';

import { type VariantProps } from 'tailwind-variants';

import { tv } from '@/utils';

type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type IconProps<TVariants extends Record<string, SvgComponent>> = Omit<
  React.SVGProps<SVGSVGElement>,
  'children'
> & {
  variant?: keyof TVariants;
  size?: VariantProps<typeof iconStyles>['size'];
  'aria-label'?: string;
};

const ICON_BRAND = Symbol.for('ui-kit.icon');

const iconStyles = tv({
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
    },
  },
});

export function createIcon<TVariants extends Record<string, SvgComponent>>(
  displayName: string,
  variants: TVariants,
) {
  const variantMap = variants;
  const variantKeys = Object.keys(variantMap) as (keyof TVariants)[];
  const computedDefaultVariant = variantKeys?.[0] ?? undefined;

  const CreatedIcon = React.forwardRef<SVGSVGElement, IconProps<TVariants>>(
    (
      {
        variant = computedDefaultVariant,
        size = 'md',
        'aria-label': ariaLabel,
        role = 'img',
        className,
        ...props
      },
      ref,
    ) => {
      const isDecorative = !ariaLabel;
      const injectedProps: IconProps<TVariants> = {
        role,
        ref,
        'aria-hidden': isDecorative ? true : undefined,
        'aria-label': ariaLabel,
        focusable: isDecorative ? 'false' : undefined,
        className: iconStyles({ size, className }),
        ...props,
      };

      const Icon = variantMap[variant] as SvgComponent | undefined;
      if (!Icon) {
        throw new Error(
          `Icon ${displayName} is missing ${String(variant)} variant`,
        );
      }

      return <Icon {...injectedProps} />;
    },
  );

  CreatedIcon.displayName = displayName;
  (CreatedIcon as any)[ICON_BRAND] = true;

  return CreatedIcon;
}

export const isIconElement = (
  child: React.ReactNode,
): child is React.ReactElement<IconProps<any>> => {
  if (React.Children.count(child) !== 1)
    throw new Error('isIconElement: Icon must have exactly one child');

  return (
    React.isValidElement(child) && (child.type as any)[ICON_BRAND] === true
  );
};
