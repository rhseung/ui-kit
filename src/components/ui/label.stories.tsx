import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/ui/label';
import { TextField } from '@/components/ui/text-field';
import { ThemeProvider } from '@/hooks/use-theme';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
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
    error: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// Default Story
export const Default: Story = {
  args: {
    children: 'Label',
    size: 'md',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label size="sm" htmlFor="input-sm">
        Small Label
      </Label>
      <Label size="md" htmlFor="input-md">
        Medium Label
      </Label>
      <Label size="lg" htmlFor="input-lg">
        Large Label
      </Label>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="normal">Normal Label</Label>
        <TextField id="normal" placeholder="Normal input" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="required" required>
          Required Label
        </Label>
        <TextField id="required" placeholder="Required input" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="error" error>
          Error Label
        </Label>
        <TextField id="error" placeholder="Error input" error />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="error-required" error required>
          Error & Required Label
        </Label>
        <TextField
          id="error-required"
          placeholder="Error & Required input"
          error
        />
      </div>
    </div>
  ),
};

// Sizes × States
export const SizesXStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Small</h3>
        <div className="flex flex-col gap-2">
          <Label size="sm" htmlFor="sm-normal">
            Normal
          </Label>
          <Label size="sm" htmlFor="sm-required" required>
            Required
          </Label>
          <Label size="sm" htmlFor="sm-error" error>
            Error
          </Label>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Medium</h3>
        <div className="flex flex-col gap-2">
          <Label size="md" htmlFor="md-normal">
            Normal
          </Label>
          <Label size="md" htmlFor="md-required" required>
            Required
          </Label>
          <Label size="md" htmlFor="md-error" error>
            Error
          </Label>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Large</h3>
        <div className="flex flex-col gap-2">
          <Label size="lg" htmlFor="lg-normal">
            Normal
          </Label>
          <Label size="lg" htmlFor="lg-required" required>
            Required
          </Label>
          <Label size="lg" htmlFor="lg-error" error>
            Error
          </Label>
        </div>
      </div>
    </div>
  ),
};

// With TextField
export const WithTextField: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <TextField id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-required" required>
          Email (Required)
        </Label>
        <TextField
          id="email-required"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-error" error>
          Email (Error)
        </Label>
        <TextField
          id="email-error"
          type="email"
          placeholder="Enter your email"
          error
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" required>
          Password
        </Label>
        <TextField
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <form className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" required>
          Full Name
        </Label>
        <TextField id="name" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <TextField id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <TextField id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="invalid-email" error required>
          Invalid Email
        </Label>
        <TextField
          id="invalid-email"
          type="email"
          placeholder="invalid-email"
          error
        />
      </div>
    </form>
  ),
};

// Interactive
export const Interactive: Story = {
  args: {
    children: 'Interactive Label',
    size: 'md',
    error: false,
    required: false,
    htmlFor: 'interactive-input',
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label {...args} />
      <TextField id="interactive-input" placeholder="Type here..." />
    </div>
  ),
};
