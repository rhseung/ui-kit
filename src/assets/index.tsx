import SunFillIcon from '@/assets/icons/sun-fill.svg?react';
import SunLineIcon from '@/assets/icons/sun-line.svg?react';
import { createIcon } from '@/components/ui/icon';

export const SunIcon = createIcon('SunIcon', {
  line: SunLineIcon,
  fill: SunFillIcon,
});
