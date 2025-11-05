import React from 'react';

import { cn } from '../utils/cn';

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.Children.count(children) !== 1) {
      throw new Error(
        `Slot must have exactly one child element, but got: ${React.Children.count(children)}`,
      );
    }

    if (
      !React.isValidElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >(children)
    ) {
      throw new Error(
        `Slot child must be a valid React element, but got: ${children}`,
      );
    }

    return React.cloneElement(children, {
      ...props,
      ...children.props,
      className: cn(props.className, children.props.className),
      style: { ...props.style, ...children.props.style },
      ref,
    });
  },
);

Slot.displayName = 'Slot';
