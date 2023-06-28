import type { Meta, StoryObj } from '@storybook/react'

import LoginSection from './LoginSection'

const meta: Meta<typeof LoginSection> = {
  title: 'Organisms/LoginSection',
  component: LoginSection,

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoginSection>

export const Login: Story = {
  args: {
    title: "Login",
    onChange: ()=>console.log("first")
  },
}
