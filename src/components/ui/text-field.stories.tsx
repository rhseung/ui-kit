import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '@/components/ui/text-field';
import { ThemeProvider } from '@/hooks/use-theme';
import { hueNames } from '@/styles/colors';

const meta: Meta<typeof TextField> = {
  title: 'Components/Input',
  component: TextField,
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
type Story = StoryObj<typeof TextField>;

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
      <TextField size="sm" placeholder="Small input" />
      <TextField size="md" placeholder="Medium input" />
      <TextField size="lg" placeholder="Large input" />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextField placeholder="Normal input" />
      <TextField placeholder="Error input" error />
      <TextField placeholder="Disabled input" disabled />
      <TextField placeholder="Readonly input" readOnly value="Readonly value" />
    </div>
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextField color="indigo" placeholder="Indigo input" />
      <TextField color="cyan" placeholder="Cyan input" />
      <TextField color="orange" placeholder="Orange input" />
      <TextField color="crimson" placeholder="Crimson input" />
      <TextField color="green" placeholder="Green input" />
      <TextField color="purple" placeholder="Purple input" />
      <TextField color="pink" placeholder="Pink input" />
      <TextField color="blue" placeholder="Blue input" />
    </div>
  ),
};

// Input Types
export const InputTypes: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">text</label>
        <TextField type="text" placeholder="Text input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">email</label>
        <TextField type="email" placeholder="Email input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">password</label>
        <TextField type="password" placeholder="Password input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">number</label>
        <TextField type="number" placeholder="Number input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">search</label>
        <TextField type="search" placeholder="Search input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">tel</label>
        <TextField type="tel" placeholder="Tel input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">url</label>
        <TextField type="url" placeholder="URL input" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">date</label>
        <TextField type="date" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">time</label>
        <TextField type="time" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">datetime-local</label>
        <TextField type="datetime-local" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">month</label>
        <TextField type="month" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">week</label>
        <TextField type="week" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">color</label>
        <TextField type="color" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">range</label>
        <TextField type="range" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">file</label>
        <TextField type="file" />
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
          <TextField color="indigo" size="sm" placeholder="Indigo small" />
          <TextField color="cyan" size="sm" placeholder="Cyan small" />
          <TextField color="orange" size="sm" placeholder="Orange small" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Medium</h3>
        <div className="flex flex-col gap-2">
          <TextField color="indigo" size="md" placeholder="Indigo medium" />
          <TextField color="cyan" size="md" placeholder="Cyan medium" />
          <TextField color="orange" size="md" placeholder="Orange medium" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Large</h3>
        <div className="flex flex-col gap-2">
          <TextField color="indigo" size="lg" placeholder="Indigo large" />
          <TextField color="cyan" size="lg" placeholder="Cyan large" />
          <TextField color="orange" size="lg" placeholder="Orange large" />
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
          <TextField color="indigo" error placeholder="Indigo error" />
          <TextField color="cyan" error placeholder="Cyan error" />
          <TextField color="crimson" error placeholder="Crimson error" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Disabled States</h3>
        <div className="flex flex-col gap-2">
          <TextField color="indigo" disabled placeholder="Indigo disabled" />
          <TextField color="cyan" disabled placeholder="Cyan disabled" />
          <TextField color="orange" disabled placeholder="Orange disabled" />
        </div>
      </div>
    </div>
  ),
};

// Combinations
export const Combinations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextField color="indigo" size="lg" placeholder="Indigo large input" />
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
      <TextField
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
