import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon, SunIcon } from '@/assets';
import { InputGroup } from '@/components/input-group';
import { ThemeProvider } from '@/hooks/use-theme';
import { hueNames } from '@/styles/colors';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
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
type Story = StoryObj<typeof InputGroup>;

// Default Story
export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroup.Input placeholder="Enter text..." />
    </InputGroup>
  ),
};

// Basic InputGroup
export const Basic: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup color="indigo">
        <SearchIcon />
        <InputGroup.Input placeholder="Search with icon" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Weight" />
        <span className="text-body text-(--gray-11)">kg</span>
      </InputGroup>
      <InputGroup>
        <SearchIcon />
        <InputGroup.Input placeholder="Weight" />
        <span className="text-body text-(--gray-11)">kg</span>
      </InputGroup>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup size="sm">
        <SearchIcon />
        <InputGroup.Input placeholder="Small input" />
      </InputGroup>
      <InputGroup size="md">
        <SearchIcon />
        <InputGroup.Input placeholder="Medium input" />
      </InputGroup>
      <InputGroup size="lg">
        <SearchIcon />
        <InputGroup.Input placeholder="Large input" />
      </InputGroup>
    </div>
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup color="indigo">
        <SearchIcon />
        <InputGroup.Input placeholder="Indigo input" />
      </InputGroup>
      <InputGroup color="cyan">
        <SearchIcon />
        <InputGroup.Input placeholder="Cyan input" />
      </InputGroup>
      <InputGroup color="orange">
        <SearchIcon />
        <InputGroup.Input placeholder="Orange input" />
      </InputGroup>
      <InputGroup color="crimson">
        <SearchIcon />
        <InputGroup.Input placeholder="Crimson input" />
      </InputGroup>
      <InputGroup color="green">
        <SearchIcon />
        <InputGroup.Input placeholder="Green input" />
      </InputGroup>
      <InputGroup color="purple">
        <SearchIcon />
        <InputGroup.Input placeholder="Purple input" />
      </InputGroup>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup>
        <SearchIcon />
        <InputGroup.Input placeholder="Normal input" />
      </InputGroup>
      <InputGroup error>
        <SearchIcon />
        <InputGroup.Input placeholder="Error input" />
      </InputGroup>
      <InputGroup disabled>
        <SearchIcon />
        <InputGroup.Input placeholder="Disabled input" />
      </InputGroup>
    </div>
  ),
};

// Variations
export const Variations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup>
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="0.00" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Email" />
        <span className="text-body text-(--gray-11)">@example.com</span>
      </InputGroup>
      <InputGroup>
        <span className="text-body text-(--gray-11)">https://</span>
        <InputGroup.Input placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <SunIcon />
        <InputGroup.Input placeholder="With icon" />
        <SunIcon />
      </InputGroup>
    </div>
  ),
};

// Multiple Adornments
export const MultipleAdornments: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup>
        <SearchIcon />
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="Two adornments on left" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Input placeholder="Two adornments on right" />
        <span className="text-body text-(--gray-11)">kg</span>
        <SearchIcon />
      </InputGroup>
      <InputGroup>
        <SearchIcon />
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="Two on left, one on right" />
        <span className="text-body text-(--gray-11)">USD</span>
      </InputGroup>
      <InputGroup>
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="One on left, two on right" />
        <span className="text-body text-(--gray-11)">USD</span>
        <SearchIcon />
      </InputGroup>
      <InputGroup>
        <SearchIcon />
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="Three adornments total" />
        <span className="text-body text-(--gray-11)">USD</span>
      </InputGroup>
      <InputGroup>
        <SearchIcon />
        <SunIcon />
        <InputGroup.Input placeholder="Two icons on left" />
        <span className="text-body text-(--gray-11)">kg</span>
      </InputGroup>
      <InputGroup>
        <span className="text-body text-(--gray-11)">https://</span>
        <InputGroup.Input placeholder="www.example.com" />
        <span className="text-body text-(--gray-11)">.com</span>
        <SearchIcon />
      </InputGroup>
      <InputGroup>
        <SearchIcon />
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="Multiple adornments" />
        <span className="text-body text-(--gray-11)">USD</span>
        <SunIcon />
      </InputGroup>
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
          <InputGroup color="indigo" size="sm">
            <SearchIcon />
            <InputGroup.Input placeholder="Indigo small" />
          </InputGroup>
          <InputGroup color="cyan" size="sm">
            <SearchIcon />
            <InputGroup.Input placeholder="Cyan small" />
          </InputGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Medium</h3>
        <div className="flex flex-col gap-2">
          <InputGroup color="indigo" size="md">
            <SearchIcon />
            <InputGroup.Input placeholder="Indigo medium" />
          </InputGroup>
          <InputGroup color="cyan" size="md">
            <SearchIcon />
            <InputGroup.Input placeholder="Cyan medium" />
          </InputGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Large</h3>
        <div className="flex flex-col gap-2">
          <InputGroup color="indigo" size="lg">
            <SearchIcon />
            <InputGroup.Input placeholder="Indigo large" />
          </InputGroup>
          <InputGroup color="cyan" size="lg">
            <SearchIcon />
            <InputGroup.Input placeholder="Cyan large" />
          </InputGroup>
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
          <InputGroup color="indigo" error>
            <SearchIcon />
            <InputGroup.Input placeholder="Indigo error" />
          </InputGroup>
          <InputGroup color="cyan" error>
            <SearchIcon />
            <InputGroup.Input placeholder="Cyan error" />
          </InputGroup>
          <InputGroup color="crimson" error>
            <SearchIcon />
            <InputGroup.Input placeholder="Crimson error" />
          </InputGroup>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Disabled States</h3>
        <div className="flex flex-col gap-2">
          <InputGroup color="indigo" disabled>
            <SearchIcon />
            <InputGroup.Input placeholder="Indigo disabled" />
          </InputGroup>
          <InputGroup color="cyan" disabled>
            <SearchIcon />
            <InputGroup.Input placeholder="Cyan disabled" />
          </InputGroup>
          <InputGroup color="orange" disabled>
            <SearchIcon />
            <InputGroup.Input placeholder="Orange disabled" />
          </InputGroup>
        </div>
      </div>
    </div>
  ),
};

// Complex Combinations
export const ComplexCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <InputGroup color="indigo" size="lg">
        <SearchIcon />
        <InputGroup.Input placeholder="Indigo large with icon" />
      </InputGroup>
      <InputGroup color="cyan" size="sm" error>
        <SearchIcon />
        <InputGroup.Input placeholder="Cyan small error" />
      </InputGroup>
      <InputGroup color="orange" size="md" disabled>
        <SearchIcon />
        <InputGroup.Input placeholder="Orange disabled" />
      </InputGroup>
      <InputGroup color="green" size="lg">
        <SearchIcon />
        <span className="text-body text-(--gray-11)">$</span>
        <InputGroup.Input placeholder="Green with multiple adornments" />
        <span className="text-body text-(--gray-11)">USD</span>
      </InputGroup>
    </div>
  ),
};

// Interactive Story
export const Interactive: Story = {
  render: () => (
    <InputGroup>
      <SearchIcon />
      <InputGroup.Input placeholder="Type something..." />
    </InputGroup>
  ),
};
