import type { Meta, StoryObj } from '@storybook/react';

import { SunIcon } from '@/assets';
import { Button, IconButton } from '@/components/ui/button';
import { ThemeProvider } from '@/hooks/use-theme';
import { hueNames } from '@/styles/colors';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
      options: ['solid', 'soft', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: hueNames,
    },
    highContrast: {
      control: 'boolean',
    },
    block: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Variants
export const Variants: Story = {
  args: {
    color: 'lime',
  },

  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

// Variants with highContrast
export const VariantsHighContrast: Story = {
  render: () => (
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
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Variants × Sizes
export const VariantsXSizes: Story = {
  render: () => (
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
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
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
  ),
};

// Colors × Variants
export const ColorsXVariants: Story = {
  render: () => (
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
  ),
};

// Icon with Text
export const IconWithText: Story = {
  render: () => (
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
  ),
};

// IconButton
export const IconButtonVariants: Story = {
  render: () => (
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
  ),
};

// IconButton with highContrast
export const IconButtonHighContrast: Story = {
  render: () => (
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
  ),
};

// IconButton with Colors
export const IconButtonColors: Story = {
  render: () => (
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
  ),
};

// Block Button
export const BlockButton: Story = {
  render: () => (
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
  ),
};

// Complex Combinations
export const ComplexCombinations: Story = {
  render: () => (
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
  ),
};

// Default Story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'md',
  },
};

// Interactive Story
export const Interactive: Story = {
  args: {
    children: 'Click me',
    variant: 'solid',
    size: 'md',
    onClick: () => alert('Button clicked!'),
  },
};
