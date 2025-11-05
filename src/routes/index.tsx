import 'react';

import { createFileRoute } from '@tanstack/react-router';

import { SunIcon } from '@/assets';
import { Button, IconButton } from '@/components';
import { Input } from '@/components/ui/input';
import { useInteractiveState } from '@/hooks/use-interactive-state';
import { useTheme } from '@/hooks/use-theme';
import { type HueName, hueNames } from '@/styles/colors';
import { cn } from '@/utils/cn';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { resolvedTheme, toggleTheme, accent, setAccent } = useTheme();

  return (
    <div className={cn('h-lvh w-full bg-(--gray-1)')}>
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
        <div className="flex justify-start gap-4">
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <IconButton>
            <SunIcon />
          </IconButton>
        </div>
        <div className="flex justify-start gap-4">
          <Button color="indigo" variant="soft">
            Indigo
          </Button>
          <Button color="cyan" variant="soft">
            Cyan
          </Button>
          <Button color="orange" variant="soft">
            Orange
          </Button>
          <Button color="crimson" variant="soft">
            Crimson
          </Button>
        </div>
        <div className="flex justify-start gap-4">
          <Input placeholder="Input" />
          <Input error placeholder="Error" />
        </div>
        <DemoInteractiveButton />
      </div>
    </div>
  );
}

function DemoInteractiveButton() {
  const { state, eventHandlers } = useInteractiveState();
  const label = `${state.hover ? 'hover' : 'default'} | ${state.active || 'inactive'} | ${state.focus || 'blurred'}`;
  return (
    <button
      className="rounded border border-gray-300 px-4 py-2 font-mono text-sm"
      {...eventHandlers}
    >
      {label}
    </button>
  );
}
