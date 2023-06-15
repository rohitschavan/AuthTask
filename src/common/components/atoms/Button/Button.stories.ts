import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'delivered', 'shipped', 'notDelivered'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Login',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
}

export const Delivered: Story = {
  args: {
    children: 'Delivered',
    variant: 'delivered',
  },
}

export const Shipped: Story = {
  args: {
    children: 'Shipped',
    variant: 'shipped',
  },
}
export const NotDelivered: Story = {
  args: {
    children: 'Not Delivered',
    variant: 'notDelivered',
  },
}
