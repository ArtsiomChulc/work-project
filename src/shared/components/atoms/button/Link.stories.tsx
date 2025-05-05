import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {HiOutlineExternalLink} from "react-icons/hi";

import {Button} from './Button';

const meta = {
  title: 'UI/Link',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  decorators: [
    (Story) => (
        <div style={{ margin: '2em' }}>
          <Story />
        </div>
    )
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    type: 'link',
    text: 'Small',
    href: 'https://example.com',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    type: 'link',
    text: 'Medium',
    href: 'https://example.com',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    type: 'link',
    text: 'Large',
    href: 'https://example.com',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'medium',
    type: 'link',
    text: 'Large',
    icon: <HiOutlineExternalLink />,
    href: 'https://example.com',
  },
};
