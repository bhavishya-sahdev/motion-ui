import type { Meta, StoryObj } from '@storybook/react-vite';

import Slider from './slider';
import { useState } from 'react';

const meta = {
  component: Slider,
  title: 'Components/Slider',
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    start: 0,
    end: 50
  }
};

export const SmallRange: Story = {
  args: {
    start: 0,
    end: 10
  }
};

export const LargeRange: Story = {
  args: {
    start: 0,
    end: 100
  }
};

export const NegativeRange: Story = {
  args: {
    start: -50,
    end: 50
  }
};

export const HighValues: Story = {
  args: {
    start: 100,
    end: 200
  }
};
