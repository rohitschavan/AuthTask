import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'select' },
    },
    fw: {
      options: [100, 500, 700],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const Xxs: Story = {
  args: {
    children: 'Extra small',
    size: 'xxs',
  },
}

export const Xs: Story = {
  args: {
    children: 'Extra small',
    size: 'xs',
  },
}

export const Sm: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Md: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
}

export const Lg: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}
export const Xl: Story = {
  args: {
    children: 'Extra Large',
    size: 'xl',
  },
}

export const Xxl: Story = {
  args: {
    children: 'Extra Large',
    size: 'xxl',
  },
}
