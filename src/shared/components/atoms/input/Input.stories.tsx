import type {Meta, StoryObj} from '@storybook/react';

import {Input} from "./Input.tsx";

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ margin: '1em' }}>
          <Story />
        </div>
    )
  ]
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputOrdinary: Story = {
  args: {
    label: 'Small get it',
  },
};
