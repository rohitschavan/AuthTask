import type { Meta, StoryObj } from '@storybook/react'

import Status from './Status'

const meta: Meta<typeof Status> = {
  title: 'Atoms/Status',
  component: Status,
  argTypes: {
    variant: {
      options: [
        'awaitingPayment',
        'preparingtoShip',
        'inTransit',
        'delivered',
        'cancelled',
        'notDelivered',
      ],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Status>

export const AwaitingPayment: Story = {
  args: {
    children: 'Awaiting Payment',
    variant: 'awaitingPayment',
  },
}

export const PreparingtoShip: Story = {
  args: {
    children: 'PreparingtoShip',
    variant: 'preparingtoShip',
  },
}

export const InTransit: Story = {
  args: {
    children: 'In Transit',
    variant: 'inTransit',
  },
}

export const Delivered: Story = {
  args: {
    children: 'Delivered',
    variant: 'delivered',
  },
}
export const Cancelled: Story = {
  args: {
    children: 'Cancelled',
    variant: 'cancelled',
  },
}

export const NotDelivered: Story = {
  args: {
    children: 'Not Delivered',
    variant: 'notDelivered',
  },
}
