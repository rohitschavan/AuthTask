import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm'
import './LoginForm.scss'

const meta: Meta<typeof LoginForm> = {
  title: 'Molecules/LoginForm',
  component: LoginForm,

  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoginForm>


export const Login: Story = {};
