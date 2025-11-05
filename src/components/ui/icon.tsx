import * as React from 'react';

type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type CreateIconOptions<TVariants extends Record<string, SvgComponent>> = {
  defaultSize?: number | string;
  defaultVariant?: keyof TVariants;
  baseProps?: React.SVGProps<SVGSVGElement>;
};

type CreatedIconProps<TVariants extends Record<string, SvgComponent>> = Omit<
  React.SVGProps<SVGSVGElement>,
  'children'
> & {
  variant?: keyof TVariants;
  size?: number | string;
  'aria-label'?: string;
};

export function createIcon<TVariants extends Record<string, SvgComponent>>(
  displayName: string,
  variants: TVariants,
  {
    defaultSize = 24,
    baseProps,
    defaultVariant,
  }: CreateIconOptions<TVariants> = {},
) {
  const variantMap = variants;
  const variantKeys = Object.keys(variantMap) as (keyof TVariants)[];
  const computedDefaultVariant =
    defaultVariant ?? variantKeys?.[0] ?? undefined;

  const CreatedIcon = React.forwardRef<
    SVGSVGElement,
    CreatedIconProps<TVariants>
  >(
    (
      {
        variant = computedDefaultVariant,
        size = defaultSize,
        'aria-label': ariaLabel,
        role = 'img',
        ...props
      },
      ref,
    ) => {
      const computedSize = typeof size === 'number' ? `${size}px` : size;
      const isDecorative = !ariaLabel;
      const injectedProps: CreatedIconProps<TVariants> = {
        role,
        ref,
        width: computedSize,
        height: computedSize,
        'aria-hidden': isDecorative ? true : undefined,
        'aria-label': ariaLabel,
        focusable: isDecorative ? 'false' : undefined,
        ...baseProps,
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
  return CreatedIcon;
}
