import 'react';

import { createFileRoute } from '@tanstack/react-router';

import { SearchIcon, SunIcon } from '@/assets';
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputGroupInput,
} from '@/components';
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
            <Input placeholder="Default input" />
            <Input placeholder="Small input" size="sm" />
            <Input placeholder="Large input" size="lg" />
          </div>
        </div>

        {/* Input Sizes */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input Sizes
          </div>
          <div className="flex flex-col gap-3">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </div>

        {/* Input States */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input States
          </div>
          <div className="flex flex-col gap-3">
            <Input placeholder="Normal input" />
            <Input placeholder="Error input" error />
            <Input placeholder="Disabled input" disabled />
            <Input
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
            <Input color="indigo" placeholder="Indigo input" />
            <Input color="cyan" placeholder="Cyan input" />
            <Input color="orange" placeholder="Orange input" />
            <Input color="crimson" placeholder="Crimson input" />
            <Input color="green" placeholder="Green input" />
            <Input color="purple" placeholder="Purple input" />
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
              <Input type="text" placeholder="Text input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">email</label>
              <Input type="email" placeholder="Email input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">password</label>
              <Input type="password" placeholder="Password input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">number</label>
              <Input type="number" placeholder="Number input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">search</label>
              <Input type="search" placeholder="Search input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">tel</label>
              <Input type="tel" placeholder="Tel input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">url</label>
              <Input type="url" placeholder="URL input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">date</label>
              <Input type="date" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">time</label>
              <Input type="time" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">
                datetime-local
              </label>
              <Input type="datetime-local" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">month</label>
              <Input type="month" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">week</label>
              <Input type="week" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">color</label>
              <Input type="color" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">range</label>
              <Input type="range" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-caption text-(--gray-11)">file</label>
              <Input type="file" />
            </div>
          </div>
        </div>

        {/* Input Combinations */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            Input Combinations
          </div>
          <div className="flex flex-col gap-3">
            <Input color="indigo" size="lg" placeholder="Indigo large input" />
            <Input
              color="cyan"
              size="sm"
              error
              placeholder="Cyan small error input"
            />
            <Input
              color="orange"
              size="md"
              disabled
              placeholder="Orange disabled input"
            />
          </div>
        </div>

        {/* InputGroup */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            InputGroup
          </div>
          <div className="flex flex-col gap-3">
            <InputGroup color="indigo">
              <SearchIcon />
              <InputGroupInput placeholder="Search with icon" />
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="Weight" />
              <span className="text-body text-(--gray-11)">kg</span>
            </InputGroup>
            <InputGroup>
              <SearchIcon />
              <InputGroupInput placeholder="Weight" />
              <span className="text-body text-(--gray-11)">kg</span>
            </InputGroup>
          </div>
        </div>

        {/* InputGroup Sizes */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            InputGroup Sizes
          </div>
          <div className="flex flex-col gap-3">
            <InputGroup size="sm">
              <SearchIcon size="sm" />
              <InputGroupInput placeholder="Small input" />
            </InputGroup>
            <InputGroup size="md">
              <SearchIcon />
              <InputGroupInput placeholder="Medium input" />
            </InputGroup>
            <InputGroup size="lg">
              <SearchIcon size="lg" />
              <InputGroupInput placeholder="Large input" />
            </InputGroup>
          </div>
        </div>

        {/* InputGroup with Colors */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            InputGroup Colors
          </div>
          <div className="flex flex-col gap-3">
            <InputGroup color="indigo">
              <SearchIcon />
              <InputGroupInput placeholder="Indigo input" />
            </InputGroup>
            <InputGroup color="cyan">
              <SearchIcon />
              <InputGroupInput placeholder="Cyan input" />
            </InputGroup>
            <InputGroup color="orange">
              <SearchIcon />
              <InputGroupInput placeholder="Orange input" />
            </InputGroup>
          </div>
        </div>

        {/* InputGroup States */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            InputGroup States
          </div>
          <div className="flex flex-col gap-3">
            <InputGroup>
              <SearchIcon />
              <InputGroupInput placeholder="Normal input" />
            </InputGroup>
            <InputGroup error>
              <SearchIcon />
              <InputGroupInput placeholder="Error input" />
            </InputGroup>
            <InputGroup disabled>
              <SearchIcon />
              <InputGroupInput placeholder="Disabled input" />
            </InputGroup>
          </div>
        </div>

        {/* InputGroup Variations */}
        <div className="flex flex-col gap-2">
          <div className={cn('text-title-4 font-semibold text-(--gray-12)')}>
            InputGroup Variations
          </div>
          <div className="flex flex-col gap-3">
            <InputGroup>
              <span className="text-body text-(--gray-11)">$</span>
              <InputGroupInput placeholder="0.00" />
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="Email" />
              <span className="text-body text-(--gray-11)">@example.com</span>
            </InputGroup>
            <InputGroup>
              <span className="text-body text-(--gray-11)">https://</span>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
            <InputGroup>
              <SunIcon />
              <InputGroupInput placeholder="With icon" />
              <SunIcon />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
