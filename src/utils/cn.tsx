import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  override: {
    classGroups: {
      'font-size': [
        'text-title-1',
        'text-title-2',
        'text-title-3',
        'text-title-4',
        'text-body',
        'text-caption',
      ],
      'font-weight': [
        'text-title-1',
        'text-title-2',
        'text-title-3',
        'text-title-4',
        'text-body',
        'text-caption',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
