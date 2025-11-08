import 'react';

import { createFileRoute } from '@tanstack/react-router';

import { SearchIcon, SunIcon } from '@/assets';
import { Button, IconButton, TextField, TextFieldGroup } from '@/components';
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
            <IconButton size="md" variant="soft">
              <SunIcon />
            </IconButton>
            <IconButton size="md" variant="outline">
              <SunIcon />
            </IconButton>
            <IconButton size="md" variant="ghost">
              <SunIcon />
            </IconButton>
          </div>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input
          </div>
          <div className="flex flex-col gap-3">
            <TextField placeholder="Default input" />
            <TextField placeholder="Small input" size="sm" />
            <TextField placeholder="Large input" size="lg" />
          </div>
        </div>

        {/* Input Sizes */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input Sizes
          </div>
          <div className="flex flex-col gap-3">
            <TextField size="sm" placeholder="Small input" />
            <TextField size="md" placeholder="Medium input" />
            <TextField size="lg" placeholder="Large input" />
          </div>
        </div>

        {/* Input States */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input States
          </div>
          <div className="flex flex-col gap-3">
            <TextField placeholder="Normal input" />
            <TextField placeholder="Error input" error />
            <TextField placeholder="Disabled input" disabled />
            <TextField
              placeholder="Readonly input"
              readOnly
              value="Readonly value"
            />
          </div>
        </div>

        {/* Input Colors */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input Colors
          </div>
          <div className="flex flex-col gap-3">
            <TextField color="indigo" placeholder="Indigo input" />
            <TextField color="cyan" placeholder="Cyan input" />
            <TextField color="orange" placeholder="Orange input" />
            <TextField color="crimson" placeholder="Crimson input" />
            <TextField color="green" placeholder="Green input" />
            <TextField color="purple" placeholder="Purple input" />
          </div>
        </div>

        {/* Input Types */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input Types
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">text</label>
              <TextField type="text" placeholder="Text input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">email</label>
              <TextField type="email" placeholder="Email input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">password</label>
              <TextField type="password" placeholder="Password input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">number</label>
              <TextField type="number" placeholder="Number input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">search</label>
              <TextField type="search" placeholder="Search input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">tel</label>
              <TextField type="tel" placeholder="Tel input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">url</label>
              <TextField type="url" placeholder="URL input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">date</label>
              <TextField type="date" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">time</label>
              <TextField type="time" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">
                datetime-local
              </label>
              <TextField type="datetime-local" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">month</label>
              <TextField type="month" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">week</label>
              <TextField type="week" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">color</label>
              <TextField type="color" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">range</label>
              <TextField type="range" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">file</label>
              <TextField type="file" />
            </div>
          </div>
        </div>

        {/* Input Combinations */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input Combinations
          </div>
          <div className="flex flex-col gap-3">
            <TextField
              color="indigo"
              size="lg"
              placeholder="Indigo large input"
            />
            <TextField
              color="cyan"
              size="sm"
              error
              placeholder="Cyan small error input"
            />
            <TextField
              color="orange"
              size="md"
              disabled
              placeholder="Orange disabled input"
            />
          </div>
        </div>

        {/* TextFieldGroup */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            TextFieldGroup
          </div>
          <div className="flex flex-col gap-3">
            <TextFieldGroup color="indigo">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Search with icon" />
            </TextFieldGroup>
            <TextFieldGroup>
              <TextFieldGroup.TextField placeholder="Weight" />
              <span className="text-body text-(--gray-11)">kg</span>
            </TextFieldGroup>
            <TextFieldGroup>
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Weight" />
              <span className="text-body text-(--gray-11)">kg</span>
            </TextFieldGroup>
          </div>
        </div>

        {/* TextFieldGroup Sizes */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            TextFieldGroup Sizes
          </div>
          <div className="flex flex-col gap-3">
            <TextFieldGroup size="sm">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Small input" />
            </TextFieldGroup>
            <TextFieldGroup size="md">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Medium input" />
            </TextFieldGroup>
            <TextFieldGroup size="lg">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Large input" />
            </TextFieldGroup>
          </div>
        </div>

        {/* TextFieldGroup with Colors */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            TextFieldGroup Colors
          </div>
          <div className="flex flex-col gap-3">
            <TextFieldGroup color="indigo">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Indigo input" />
            </TextFieldGroup>
            <TextFieldGroup color="cyan">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Cyan input" />
            </TextFieldGroup>
            <TextFieldGroup color="orange">
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Orange input" />
            </TextFieldGroup>
          </div>
        </div>

        {/* TextFieldGroup States */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            TextFieldGroup States
          </div>
          <div className="flex flex-col gap-3">
            <TextFieldGroup>
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Normal input" />
            </TextFieldGroup>
            <TextFieldGroup error>
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Error input" />
            </TextFieldGroup>
            <TextFieldGroup disabled>
              <SearchIcon />
              <TextFieldGroup.TextField placeholder="Disabled input" />
            </TextFieldGroup>
          </div>
        </div>

        {/* TextFieldGroup Variations */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            TextFieldGroup Variations
          </div>
          <div className="flex flex-col gap-3">
            <TextFieldGroup>
              <span className="text-body text-(--gray-11)">$</span>
              <TextFieldGroup.TextField placeholder="0.00" />
            </TextFieldGroup>
            <TextFieldGroup>
              <TextFieldGroup.TextField placeholder="Email" />
              <span className="text-body text-(--gray-11)">@example.com</span>
            </TextFieldGroup>
            <TextFieldGroup>
              <span className="text-body text-(--gray-11)">https://</span>
              <TextFieldGroup.TextField placeholder="example.com" />
            </TextFieldGroup>
            <TextFieldGroup>
              <SunIcon />
              <TextFieldGroup.TextField placeholder="With icon" />
              <SunIcon />
            </TextFieldGroup>
          </div>
        </div>

        {/* TextFieldGroup Multiple Adornments */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            TextFieldGroup Multiple Adornments
          </div>
          <div className="flex flex-col gap-3">
            <TextFieldGroup>
              <SearchIcon />
              <span className="text-body text-(--gray-11)">$</span>
              <TextFieldGroup.TextField placeholder="Two adornments on left" />
            </TextFieldGroup>
            <TextFieldGroup>
              <TextFieldGroup.TextField placeholder="Two adornments on right" />
              <span className="text-body text-(--gray-11)">kg</span>
              <SearchIcon />
            </TextFieldGroup>
            <TextFieldGroup>
              <SearchIcon />
              <span className="text-body text-(--gray-11)">$</span>
              <TextFieldGroup.TextField placeholder="Two on left, one on right" />
              <span className="text-body text-(--gray-11)">USD</span>
            </TextFieldGroup>
            <TextFieldGroup>
              <span className="text-body text-(--gray-11)">$</span>
              <TextFieldGroup.TextField placeholder="One on left, two on right" />
              <span className="text-body text-(--gray-11)">USD</span>
              <SearchIcon />
            </TextFieldGroup>
            <TextFieldGroup>
              <SearchIcon />
              <span className="text-body text-(--gray-11)">$</span>
              <TextFieldGroup.TextField placeholder="Three adornments total" />
              <span className="text-body text-(--gray-11)">USD</span>
            </TextFieldGroup>
            <TextFieldGroup>
              <SearchIcon />
              <SunIcon />
              <TextFieldGroup.TextField placeholder="Two icons on left" />
              <span className="text-body text-(--gray-11)">kg</span>
            </TextFieldGroup>
            <TextFieldGroup>
              <span className="text-body text-(--gray-11)">https://</span>
              <TextFieldGroup.TextField placeholder="www.example.com" />
              <span className="text-body text-(--gray-11)">.com</span>
              <SearchIcon />
            </TextFieldGroup>
            <TextFieldGroup>
              <SearchIcon />
              <span className="text-body text-(--gray-11)">$</span>
              <TextFieldGroup.TextField placeholder="Multiple adornments" />
              <span className="text-body text-(--gray-11)">USD</span>
              <SunIcon />
            </TextFieldGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
