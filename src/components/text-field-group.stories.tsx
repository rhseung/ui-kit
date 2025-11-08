import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon, SunIcon } from '@/assets';
import { TextFieldGroup } from '@/components/text-field-group';
import { ThemeProvider } from '@/hooks/use-theme';
import { hueNames } from '@/styles/colors';

const meta: Meta<typeof TextFieldGroup> = {
  title: 'Components/TextFieldGroup',
  component: TextFieldGroup,
  decorators: [
    (Story) => (
      <ThemeProvider defaultAccent="blue">
        <div className="p-8">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'underline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: hueNames,
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldGroup>;

// Default Story
export const Default: Story = {
  render: () => (
    <TextFieldGroup>
      <TextFieldGroup.TextField placeholder="Enter text..." />
    </TextFieldGroup>
  ),
};

// Basic TextFieldGroup
export const Basic: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface" color="indigo">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Search with icon" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <TextFieldGroup.TextField placeholder="Weight" />
            <span className="text-body text-(--gray-11)">kg</span>
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Weight" />
            <span className="text-body text-(--gray-11)">kg</span>
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline" color="indigo">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Search with icon" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <TextFieldGroup.TextField placeholder="Weight" />
            <span className="text-body text-(--gray-11)">kg</span>
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Weight" />
            <span className="text-body text-(--gray-11)">kg</span>
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <TextFieldGroup variant="surface">
          <SearchIcon />
          <TextFieldGroup.TextField placeholder="Surface variant" />
        </TextFieldGroup>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <TextFieldGroup variant="underline">
          <SearchIcon />
          <TextFieldGroup.TextField placeholder="Underline variant" />
        </TextFieldGroup>
      </div>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
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
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
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
      <TextFieldGroup color="crimson">
        <SearchIcon />
        <TextFieldGroup.TextField placeholder="Crimson input" />
      </TextFieldGroup>
      <TextFieldGroup color="green">
        <SearchIcon />
        <TextFieldGroup.TextField placeholder="Green input" />
      </TextFieldGroup>
      <TextFieldGroup color="purple">
        <SearchIcon />
        <TextFieldGroup.TextField placeholder="Purple input" />
      </TextFieldGroup>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
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
  ),
};

// Variations
export const Variations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface">
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="0.00" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <TextFieldGroup.TextField placeholder="Email" />
            <span className="text-body text-(--gray-11)">@example.com</span>
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <span className="text-body text-(--gray-11)">https://</span>
            <TextFieldGroup.TextField placeholder="example.com" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <SunIcon />
            <TextFieldGroup.TextField placeholder="With icon" />
            <SunIcon />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline">
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="0.00" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <TextFieldGroup.TextField placeholder="Email" />
            <span className="text-body text-(--gray-11)">@example.com</span>
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <span className="text-body text-(--gray-11)">https://</span>
            <TextFieldGroup.TextField placeholder="example.com" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <SunIcon />
            <TextFieldGroup.TextField placeholder="With icon" />
            <SunIcon />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Multiple Adornments
export const MultipleAdornments: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Two adornments on left" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <TextFieldGroup.TextField placeholder="Two adornments on right" />
            <span className="text-body text-(--gray-11)">kg</span>
            <SearchIcon />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Two on left, one on right" />
            <span className="text-body text-(--gray-11)">USD</span>
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="One on left, two on right" />
            <span className="text-body text-(--gray-11)">USD</span>
            <SearchIcon />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Three adornments total" />
            <span className="text-body text-(--gray-11)">USD</span>
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <SunIcon />
            <TextFieldGroup.TextField placeholder="Two icons on left" />
            <span className="text-body text-(--gray-11)">kg</span>
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <span className="text-body text-(--gray-11)">https://</span>
            <TextFieldGroup.TextField placeholder="www.example.com" />
            <span className="text-body text-(--gray-11)">.com</span>
            <SearchIcon />
          </TextFieldGroup>
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Multiple adornments" />
            <span className="text-body text-(--gray-11)">USD</span>
            <SunIcon />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Two adornments on left" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <TextFieldGroup.TextField placeholder="Two adornments on right" />
            <span className="text-body text-(--gray-11)">kg</span>
            <SearchIcon />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Two on left, one on right" />
            <span className="text-body text-(--gray-11)">USD</span>
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="One on left, two on right" />
            <span className="text-body text-(--gray-11)">USD</span>
            <SearchIcon />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Three adornments total" />
            <span className="text-body text-(--gray-11)">USD</span>
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <SunIcon />
            <TextFieldGroup.TextField placeholder="Two icons on left" />
            <span className="text-body text-(--gray-11)">kg</span>
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <span className="text-body text-(--gray-11)">https://</span>
            <TextFieldGroup.TextField placeholder="www.example.com" />
            <span className="text-body text-(--gray-11)">.com</span>
            <SearchIcon />
          </TextFieldGroup>
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Multiple adornments" />
            <span className="text-body text-(--gray-11)">USD</span>
            <SunIcon />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Colors × Sizes
export const ColorsXSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Small</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup color="indigo" size="sm">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo small" />
          </TextFieldGroup>
          <TextFieldGroup color="cyan" size="sm">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan small" />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Medium</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup color="indigo" size="md">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo medium" />
          </TextFieldGroup>
          <TextFieldGroup color="cyan" size="md">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan medium" />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Large</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup color="indigo" size="lg">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo large" />
          </TextFieldGroup>
          <TextFieldGroup color="cyan" size="lg">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan large" />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Variants × Sizes
export const VariantsXSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface" size="sm">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Surface small" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" size="md">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Surface medium" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" size="lg">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Surface large" />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline" size="sm">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Underline small" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" size="md">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Underline medium" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" size="lg">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Underline large" />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Variants × States
export const VariantsXStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Surface normal" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Surface error" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Surface disabled" />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Underline normal" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Underline error" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Underline disabled" />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Variants × Colors
export const VariantsXColors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface" color="indigo">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" color="cyan">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" color="orange">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Orange" />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline" color="indigo">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" color="cyan">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" color="orange">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Orange" />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// States × Colors
export const StatesXColors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Error States</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup color="indigo" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo error" />
          </TextFieldGroup>
          <TextFieldGroup color="cyan" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan error" />
          </TextFieldGroup>
          <TextFieldGroup color="crimson" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Crimson error" />
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Disabled States</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup color="indigo" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo disabled" />
          </TextFieldGroup>
          <TextFieldGroup color="cyan" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan disabled" />
          </TextFieldGroup>
          <TextFieldGroup color="orange" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Orange disabled" />
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Complex Combinations
export const ComplexCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Surface</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="surface" color="indigo" size="lg">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo large with icon" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" color="cyan" size="sm" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan small error" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" color="orange" size="md" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Orange disabled" />
          </TextFieldGroup>
          <TextFieldGroup variant="surface" color="green" size="lg">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Green with multiple adornments" />
            <span className="text-body text-(--gray-11)">USD</span>
          </TextFieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextFieldGroup variant="underline" color="indigo" size="lg">
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Indigo large with icon" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" color="cyan" size="sm" error>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Cyan small error" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" color="orange" size="md" disabled>
            <SearchIcon />
            <TextFieldGroup.TextField placeholder="Orange disabled" />
          </TextFieldGroup>
          <TextFieldGroup variant="underline" color="green" size="lg">
            <SearchIcon />
            <span className="text-body text-(--gray-11)">$</span>
            <TextFieldGroup.TextField placeholder="Green with multiple adornments" />
            <span className="text-body text-(--gray-11)">USD</span>
          </TextFieldGroup>
        </div>
      </div>
    </div>
  ),
};

// Interactive Story
export const Interactive: Story = {
  render: () => (
    <TextFieldGroup>
      <SearchIcon />
      <TextFieldGroup.TextField placeholder="Type something..." />
    </TextFieldGroup>
  ),
};
