import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowLeftIcon,
  ClipboardIcon,
  FaceIDIcon,
  FingerprintIcon,
  KeyIcon,
  MoonIcon,
  PaletteIcon,
  SearchIcon,
  SunIcon,
  SystemIcon,
} from '@/assets';
import { ThemeProvider } from '@/hooks/use-theme';

const meta: Meta<typeof SunIcon> = {
  title: 'Components/Icon',
  component: SunIcon,
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
      options: ['line', 'fill'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    'aria-label': {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SunIcon>;

const singleVariantIcons = [
  { label: 'ArrowLeft', Icon: ArrowLeftIcon },
  { label: 'Clipboard', Icon: ClipboardIcon },
  { label: 'FaceID', Icon: FaceIDIcon },
  { label: 'Fingerprint', Icon: FingerprintIcon },
];

const multiVariantIcons = [
  { label: 'Key', Icon: KeyIcon },
  { label: 'Moon', Icon: MoonIcon },
  { label: 'Palette', Icon: PaletteIcon },
  { label: 'Search', Icon: SearchIcon },
  { label: 'Sun', Icon: SunIcon },
  { label: 'System', Icon: SystemIcon },
];

const multiSizeOptions: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <SunIcon variant="line" />
      <SunIcon variant="fill" />
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <SunIcon size="sm" />
      <SunIcon size="md" />
      <SunIcon size="lg" />
    </div>
  ),
};

// Variants × Sizes
export const VariantsXSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4">
        <SunIcon variant="line" size="sm" />
        <SunIcon variant="line" size="md" />
        <SunIcon variant="line" size="lg" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <SunIcon variant="fill" size="sm" />
        <SunIcon variant="fill" size="md" />
        <SunIcon variant="fill" size="lg" />
      </div>
    </div>
  ),
};

// With aria-label (Accessibility)
export const WithAriaLabel: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <SunIcon variant="line" aria-label="Sun icon" />
      <SunIcon variant="fill" aria-label="Sun icon filled" />
      <SunIcon variant="line" size="lg" aria-label="Large sun icon" />
    </div>
  ),
};

// With custom className/color
export const WithCustomStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <SunIcon className="text-(--blue-9)" />
        <SunIcon className="text-(--green-9)" />
        <SunIcon className="text-(--red-9)" />
        <SunIcon className="text-(--purple-9)" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <SunIcon variant="fill" className="text-(--orange-9)" />
        <SunIcon variant="fill" className="text-(--cyan-9)" />
        <SunIcon variant="fill" className="text-(--pink-9)" />
        <SunIcon variant="fill" className="text-(--indigo-9)" />
      </div>
    </div>
  ),
};

// In different contexts
export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <SunIcon size="sm" />
        <span>Small icon with text</span>
      </div>
      <div className="flex items-center gap-2">
        <SunIcon size="md" />
        <span>Medium icon with text</span>
      </div>
      <div className="flex items-center gap-2">
        <SunIcon size="lg" />
        <span>Large icon with text</span>
      </div>
      <div className="flex items-center gap-3">
        <SunIcon variant="line" className="text-(--blue-9)" />
        <SunIcon variant="fill" className="text-(--blue-9)" />
        <span>Both variants with same color</span>
      </div>
    </div>
  ),
};

export const AllIcons: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-6">
      {singleVariantIcons.map(({ label, Icon }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <Icon size={args.size} aria-label={`${label} icon`} />
          <span className="text-caption text-muted-foreground">{label}</span>
        </div>
      ))}
      {multiVariantIcons.map(({ label, Icon }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <Icon
            size={args.size}
            variant={(args.variant as 'line' | 'fill') ?? 'line'}
            aria-label={`${label} icon`}
          />
          <span className="text-caption text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  ),
  args: {
    variant: 'line',
    size: 'md',
  },
};

export const IconsWithVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {multiVariantIcons.map(({ label, Icon }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-title-4 text-foreground">{label}</span>
          <div className="flex items-center gap-4">
            <Icon variant="line" aria-label={`${label} line icon`} />
            <Icon variant="fill" aria-label={`${label} fill icon`} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const IconsWithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {[...singleVariantIcons, ...multiVariantIcons].map(({ label, Icon }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-title-4 text-foreground">{label}</span>
          <div className="flex items-center gap-4">
            {multiSizeOptions.map((size) => (
              <div key={size} className="flex flex-col items-center gap-1">
                <Icon size={size} aria-label={`${label} ${size}`} />
                <span className="text-caption text-muted-foreground">
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AccessibilityExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <SunIcon variant="line" aria-label="Sun icon" />
        <span className="text-body">
          Decorative icons should be aria-hidden.
        </span>
      </div>
      <div className="flex items-center gap-3">
        <SearchIcon aria-label="Search" />
        <span className="text-body">
          Meaningful icons need aria-label or title.
        </span>
      </div>
      <div className="flex items-center gap-3">
        <KeyIcon variant="fill" size="lg" aria-label="Security" />
        <span className="text-body">
          Larger icon indicating security status.
        </span>
      </div>
    </div>
  ),
};

export const BrandPalette: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <SunIcon className="text-(--orange-9)" />
        <SunIcon variant="fill" className="text-(--cyan-9)" />
        <SunIcon variant="fill" className="text-(--pink-9)" />
      </div>
      <div className="flex items-center gap-4">
        <PaletteIcon variant="line" className="text-(--violet-9)" />
        <PaletteIcon variant="fill" className="text-(--teal-9)" />
      </div>
      <div className="flex items-center gap-4">
        <MoonIcon variant="line" className="text-(--blue-9)" />
        <MoonIcon variant="fill" className="text-(--purple-9)" />
        <SystemIcon variant="fill" className="text-(--green-9)" />
      </div>
    </div>
  ),
};

export const IconUsageInButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ArrowLeftIcon aria-label="Back" />
        <span className="text-body">Used inside navigation buttons.</span>
      </div>
      <div className="flex items-center gap-2">
        <ClipboardIcon aria-label="Copy to clipboard" />
        <span className="text-body">Indicates copy actions.</span>
      </div>
      <div className="flex items-center gap-2">
        <SearchIcon aria-label="Search" />
        <span className="text-body">Supports input adornments.</span>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    variant: 'line',
    size: 'md',
  },
};

export const Interactive: Story = {
  args: {
    variant: 'line',
    size: 'md',
    'aria-label': 'Interactive icon',
    className: 'cursor-pointer hover:opacity-80 transition-opacity',
  },
};
