import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/ui/input';
import { ThemeProvider } from '@/hooks/use-theme';
import { hueNames } from '@/styles/colors';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>;

// Default Story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    size: 'md',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Input placeholder="Normal input" />
      <Input placeholder="Error input" error />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Readonly input" readOnly value="Readonly value" />
    </div>
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Input color="indigo" placeholder="Indigo input" />
      <Input color="cyan" placeholder="Cyan input" />
      <Input color="orange" placeholder="Orange input" />
      <Input color="crimson" placeholder="Crimson input" />
      <Input color="green" placeholder="Green input" />
      <Input color="purple" placeholder="Purple input" />
      <Input color="pink" placeholder="Pink input" />
      <Input color="blue" placeholder="Blue input" />
    </div>
  ),
};

// Input Types
export const InputTypes: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">text</label>
        <Input type="text" placeholder="Text input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">email</label>
        <Input type="email" placeholder="Email input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">password</label>
        <Input type="password" placeholder="Password input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">number</label>
        <Input type="number" placeholder="Number input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">search</label>
        <Input type="search" placeholder="Search input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">tel</label>
        <Input type="tel" placeholder="Tel input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">url</label>
        <Input type="url" placeholder="URL input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">date</label>
        <Input type="date" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">time</label>
        <Input type="time" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">datetime-local</label>
        <Input type="datetime-local" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">month</label>
        <Input type="month" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">week</label>
        <Input type="week" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">color</label>
        <Input type="color" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">range</label>
        <Input type="range" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">file</label>
        <Input type="file" />
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
          <Input color="indigo" size="sm" placeholder="Indigo small" />
          <Input color="cyan" size="sm" placeholder="Cyan small" />
          <Input color="orange" size="sm" placeholder="Orange small" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Medium</h3>
        <div className="flex flex-col gap-2">
          <Input color="indigo" size="md" placeholder="Indigo medium" />
          <Input color="cyan" size="md" placeholder="Cyan medium" />
          <Input color="orange" size="md" placeholder="Orange medium" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Large</h3>
        <div className="flex flex-col gap-2">
          <Input color="indigo" size="lg" placeholder="Indigo large" />
          <Input color="cyan" size="lg" placeholder="Cyan large" />
          <Input color="orange" size="lg" placeholder="Orange large" />
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
          <Input color="indigo" error placeholder="Indigo error" />
          <Input color="cyan" error placeholder="Cyan error" />
          <Input color="crimson" error placeholder="Crimson error" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Disabled States</h3>
        <div className="flex flex-col gap-2">
          <Input color="indigo" disabled placeholder="Indigo disabled" />
          <Input color="cyan" disabled placeholder="Cyan disabled" />
          <Input color="orange" disabled placeholder="Orange disabled" />
        </div>
      </div>
    </div>
  ),
};

// Combinations
export const Combinations: Story = {
  render: () => (
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
      <Input
        color="green"
        size="lg"
        placeholder="Green large input"
        defaultValue="With default value"
      />
    </div>
  ),
};

// Interactive Story
export const Interactive: Story = {
  args: {
    placeholder: 'Type something...',
    size: 'md',
  },
};
