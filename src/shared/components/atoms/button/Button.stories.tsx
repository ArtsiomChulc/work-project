import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {FaCirclePlus} from "react-icons/fa6";

import {Button} from './Button';

const meta = {
  title: 'UI/Button',
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
    type: 'button',
    text: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    type: 'button',
    text: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    type: 'button',
    text: 'Large',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'medium',
    type: 'button',
    text: 'Large',
    icon: <FaCirclePlus />
  },
};
