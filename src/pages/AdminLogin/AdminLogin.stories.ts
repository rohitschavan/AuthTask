import type { Meta, StoryObj } from '@storybook/react'

import AdminLogin from './AdminLogin'

const meta: Meta<typeof AdminLogin> = {
  title: 'Pages/AdminLogin',
  component: AdminLogin,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AdminLogin>


export const adminLoginPage: Story = {

};
