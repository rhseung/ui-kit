import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '@/components/ui/text-field';
import { ThemeProvider } from '@/hooks/use-theme';
import { hueNames } from '@/styles/colors';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
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
type Story = StoryObj<typeof TextField>;

// Default Story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    size: 'md',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextField variant="surface" placeholder="Surface variant" />
      <TextField variant="underline" placeholder="Underline variant" />
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
          <TextField variant="surface" size="sm" placeholder="Surface small" />
          <TextField variant="surface" size="md" placeholder="Surface medium" />
          <TextField variant="surface" size="lg" placeholder="Surface large" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextField
            variant="underline"
            size="sm"
            placeholder="Underline small"
          />
          <TextField
            variant="underline"
            size="md"
            placeholder="Underline medium"
          />
          <TextField
            variant="underline"
            size="lg"
            placeholder="Underline large"
          />
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
          <TextField variant="surface" placeholder="Normal" />
          <TextField variant="surface" error placeholder="Error" />
          <TextField variant="surface" disabled placeholder="Disabled" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextField variant="underline" placeholder="Normal" />
          <TextField variant="underline" error placeholder="Error" />
          <TextField variant="underline" disabled placeholder="Disabled" />
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
          <TextField variant="surface" color="indigo" placeholder="Indigo" />
          <TextField variant="surface" color="cyan" placeholder="Cyan" />
          <TextField variant="surface" color="orange" placeholder="Orange" />
          <TextField variant="surface" color="crimson" placeholder="Crimson" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Underline</h3>
        <div className="flex flex-col gap-2">
          <TextField variant="underline" color="indigo" placeholder="Indigo" />
          <TextField variant="underline" color="cyan" placeholder="Cyan" />
          <TextField variant="underline" color="orange" placeholder="Orange" />
          <TextField
            variant="underline"
            color="crimson"
            placeholder="Crimson"
          />
        </div>
      </div>
    </div>
  ),
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
      <TextField variant="surface" placeholder="Normal input" />
      <TextField variant="surface" placeholder="Error input" error />
      <TextField variant="surface" placeholder="Disabled input" disabled />
      <TextField
        variant="surface"
        placeholder="Readonly input"
        readOnly
        value="Readonly value"
      />
    </div>
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextField variant="surface" color="indigo" placeholder="Indigo input" />
      <TextField variant="surface" color="cyan" placeholder="Cyan input" />
      <TextField variant="surface" color="orange" placeholder="Orange input" />
      <TextField
        variant="surface"
        color="crimson"
        placeholder="Crimson input"
      />
      <TextField variant="surface" color="green" placeholder="Green input" />
      <TextField variant="surface" color="purple" placeholder="Purple input" />
      <TextField variant="surface" color="pink" placeholder="Pink input" />
      <TextField variant="surface" color="blue" placeholder="Blue input" />
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
          <TextField
            variant="surface"
            color="indigo"
            size="sm"
            placeholder="Indigo small"
          />
          <TextField
            variant="surface"
            color="cyan"
            size="sm"
            placeholder="Cyan small"
          />
          <TextField
            variant="surface"
            color="orange"
            size="sm"
            placeholder="Orange small"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Medium</h3>
        <div className="flex flex-col gap-2">
          <TextField
            variant="surface"
            color="indigo"
            size="md"
            placeholder="Indigo medium"
          />
          <TextField
            variant="surface"
            color="cyan"
            size="md"
            placeholder="Cyan medium"
          />
          <TextField
            variant="surface"
            color="orange"
            size="md"
            placeholder="Orange medium"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Large</h3>
        <div className="flex flex-col gap-2">
          <TextField
            variant="surface"
            color="indigo"
            size="lg"
            placeholder="Indigo large"
          />
          <TextField
            variant="surface"
            color="cyan"
            size="lg"
            placeholder="Cyan large"
          />
          <TextField
            variant="surface"
            color="orange"
            size="lg"
            placeholder="Orange large"
          />
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
          <TextField
            variant="surface"
            color="indigo"
            error
            placeholder="Indigo error"
          />
          <TextField
            variant="surface"
            color="cyan"
            error
            placeholder="Cyan error"
          />
          <TextField
            variant="surface"
            color="crimson"
            error
            placeholder="Crimson error"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Disabled States</h3>
        <div className="flex flex-col gap-2">
          <TextField
            variant="surface"
            color="indigo"
            disabled
            placeholder="Indigo disabled"
          />
          <TextField
            variant="surface"
            color="cyan"
            disabled
            placeholder="Cyan disabled"
          />
          <TextField
            variant="surface"
            color="orange"
            disabled
            placeholder="Orange disabled"
          />
        </div>
      </div>
    </div>
  ),
};

// Combinations
export const Combinations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <TextField
        variant="surface"
        color="indigo"
        size="lg"
        placeholder="Indigo large input"
      />
      <TextField
        variant="surface"
        color="cyan"
        size="sm"
        error
        placeholder="Cyan small error input"
      />
      <TextField
        variant="surface"
        color="orange"
        size="md"
        disabled
        placeholder="Orange disabled input"
      />
      <TextField
        variant="underline"
        color="green"
        size="lg"
        placeholder="Green underline large input"
      />
      <TextField
        variant="underline"
        color="purple"
        size="md"
        error
        placeholder="Purple underline error input"
      />
      <TextField
        variant="surface"
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
