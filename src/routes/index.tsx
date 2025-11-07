import 'react';

import { createFileRoute } from '@tanstack/react-router';

import { SunIcon } from '@/assets';
import { Button, IconButton } from '@/components';
import { useTheme } from '@/hooks/use-theme';
import { type HueName, hueNames } from '@/styles/colors';
import { cn } from '@/utils/cn';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { resolvedTheme, toggleTheme, accent, setAccent } = useTheme();

  return (
    <div className={cn('h-full w-full bg-(--gray-1)')}>
      <div className="flex w-fit flex-col gap-4 p-8 transition-colors">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className={cn('text-title-3 font-bold text-(--gray-12)')}>
            Demo
          </div>
          <button
            type="button"
            className="rounded-md border px-3 py-1 text-sm text-(--gray-12)"
            onClick={toggleTheme}
          >
            {resolvedTheme === 'dark' ? 'Dark: On' : 'Dark: Off'}
          </button>
        </div>
        <div className="mb-4 flex items-center gap-3">
          <label
            className="text-sm text-(--gray-12) opacity-80"
            htmlFor="brandColor"
          >
            Brand color
          </label>
          <select
            id="brandColor"
            className="rounded-md border px-2 py-1 text-sm text-(--gray-12) capitalize"
            value={accent}
            onChange={(e) => setAccent(e.target.value as HueName)}
          >
            {hueNames.map((name) => (
              <option key={name} value={name} className="capitalize">
                {name}
              </option>
            ))}
          </select>
        </div>
        {/* Variants */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Variants
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button variant="solid">Solid</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Variants with highContrast */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Variants (High Contrast)
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button variant="solid" highContrast>
              Solid
            </Button>
            <Button variant="soft" highContrast>
              Soft
            </Button>
            <Button variant="outline" highContrast>
              Outline
            </Button>
            <Button variant="ghost" highContrast>
              Ghost
            </Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Sizes
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Variants × Sizes */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Variants × Sizes
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="solid" size="sm">
                Solid SM
              </Button>
              <Button variant="solid" size="md">
                Solid MD
              </Button>
              <Button variant="solid" size="lg">
                Solid LG
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="soft" size="sm">
                Soft SM
              </Button>
              <Button variant="soft" size="md">
                Soft MD
              </Button>
              <Button variant="soft" size="lg">
                Soft LG
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="sm">
                Outline SM
              </Button>
              <Button variant="outline" size="md">
                Outline MD
              </Button>
              <Button variant="outline" size="lg">
                Outline LG
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" size="sm">
                Ghost SM
              </Button>
              <Button variant="ghost" size="md">
                Ghost MD
              </Button>
              <Button variant="ghost" size="lg">
                Ghost LG
              </Button>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Colors
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button color="indigo" variant="solid">
              Indigo
            </Button>
            <Button color="cyan" variant="solid">
              Cyan
            </Button>
            <Button color="orange" variant="solid">
              Orange
            </Button>
            <Button color="crimson" variant="solid">
              Crimson
            </Button>
            <Button color="green" variant="solid">
              Green
            </Button>
            <Button color="purple" variant="solid">
              Purple
            </Button>
            <Button color="pink" variant="solid">
              Pink
            </Button>
            <Button color="blue" variant="solid">
              Blue
            </Button>
          </div>
        </div>

        {/* Colors with Variants */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Colors × Variants
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-start gap-4">
              <Button color="indigo" variant="soft">
                Indigo Soft
              </Button>
              <Button color="cyan" variant="soft">
                Cyan Soft
              </Button>
              <Button color="orange" variant="soft">
                Orange Soft
              </Button>
              <Button color="crimson" variant="soft">
                Crimson Soft
              </Button>
            </div>
            <div className="flex flex-wrap items-start gap-4">
              <Button color="indigo" variant="outline">
                Indigo Outline
              </Button>
              <Button color="cyan" variant="outline">
                Cyan Outline
              </Button>
              <Button color="orange" variant="outline">
                Orange Outline
              </Button>
              <Button color="crimson" variant="outline">
                Crimson Outline
              </Button>
            </div>
            <div className="flex flex-wrap items-start gap-4">
              <Button color="indigo" variant="ghost">
                Indigo Ghost
              </Button>
              <Button color="cyan" variant="ghost">
                Cyan Ghost
              </Button>
              <Button color="orange" variant="ghost">
                Orange Ghost
              </Button>
              <Button color="crimson" variant="ghost">
                Crimson Ghost
              </Button>
            </div>
          </div>
        </div>

        {/* Icon with Text */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Icon with Text
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button>
              <SunIcon /> Icon Left
            </Button>
            <Button>
              Icon Right <SunIcon />
            </Button>
            <Button size="sm">
              <SunIcon /> Small
            </Button>
            <Button size="lg">
              <SunIcon /> Large
            </Button>
          </div>
        </div>

        {/* IconButton */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            IconButton
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <IconButton size="sm" variant="solid">
                <SunIcon />
              </IconButton>
              <IconButton size="md" variant="solid">
                <SunIcon />
              </IconButton>
              <IconButton size="lg" variant="solid">
                <SunIcon />
              </IconButton>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton size="sm" variant="soft">
                <SunIcon />
              </IconButton>
              <IconButton size="md" variant="soft">
                <SunIcon />
              </IconButton>
              <IconButton size="lg" variant="soft">
                <SunIcon />
              </IconButton>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton size="sm" variant="outline">
                <SunIcon />
              </IconButton>
              <IconButton size="md" variant="outline">
                <SunIcon />
              </IconButton>
              <IconButton size="lg" variant="outline">
                <SunIcon />
              </IconButton>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton size="sm" variant="ghost">
                <SunIcon />
              </IconButton>
              <IconButton size="md" variant="ghost">
                <SunIcon />
              </IconButton>
              <IconButton size="lg" variant="ghost">
                <SunIcon />
              </IconButton>
            </div>
          </div>
        </div>

        {/* IconButton with highContrast */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            IconButton (High Contrast)
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton size="sm" variant="solid" highContrast>
              <SunIcon />
            </IconButton>
            <IconButton size="md" variant="solid" highContrast>
              <SunIcon />
            </IconButton>
            <IconButton size="lg" variant="solid" highContrast>
              <SunIcon />
            </IconButton>
            <IconButton size="md" variant="soft" highContrast>
              <SunIcon />
            </IconButton>
            <IconButton size="md" variant="outline" highContrast>
              <SunIcon />
            </IconButton>
            <IconButton size="md" variant="ghost" highContrast>
              <SunIcon />
            </IconButton>
          </div>
        </div>

        {/* IconButton with Colors */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            IconButton × Colors
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton color="indigo" variant="solid">
              <SunIcon />
            </IconButton>
            <IconButton color="cyan" variant="solid">
              <SunIcon />
            </IconButton>
            <IconButton color="orange" variant="solid">
              <SunIcon />
            </IconButton>
            <IconButton color="crimson" variant="solid">
              <SunIcon />
            </IconButton>
            <IconButton color="green" variant="soft">
              <SunIcon />
            </IconButton>
            <IconButton color="purple" variant="outline">
              <SunIcon />
            </IconButton>
            <IconButton color="pink" variant="ghost">
              <SunIcon />
            </IconButton>
          </div>
        </div>

        {/* Block Button */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Block Button
          </div>
          <div className="flex flex-col gap-3">
            <Button block>Block Button</Button>
            <Button block variant="soft">
              Block Soft
            </Button>
            <Button block variant="outline">
              Block Outline
            </Button>
            <Button block variant="ghost">
              Block Ghost
            </Button>
            <Button block highContrast>
              Block High Contrast
            </Button>
            <Button block size="lg">
              <SunIcon /> Block Large with Icon
            </Button>
          </div>
        </div>

        {/* Complex Combinations */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Complex Combinations
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-start gap-4">
              <Button color="indigo" variant="solid" size="lg" highContrast>
                <SunIcon /> Indigo Solid LG HC
              </Button>
              <Button color="cyan" variant="soft" size="md" highContrast>
                <SunIcon /> Cyan Soft MD HC
              </Button>
              <Button color="orange" variant="outline" size="sm">
                <SunIcon /> Orange Outline SM
              </Button>
            </div>
            <div className="flex flex-wrap items-start gap-4">
              <Button color="crimson" variant="ghost" size="lg">
                Crimson Ghost LG
              </Button>
              <Button color="green" variant="solid" size="sm" highContrast>
                Green Solid SM HC
              </Button>
              <Button color="purple" variant="soft" size="md">
                Purple Soft MD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
