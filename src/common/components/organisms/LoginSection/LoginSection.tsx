import React from 'react'
import LoginForm from '../../molecules/LoginForm/LoginForm'
import { Title } from '@mantine/core'
import './LoginSection.scss'

interface LoginSectionProps {
  title: string
  username: string
  password: string
  onChange: (field: string, value: string) => void
  onLogin: () => void
}

const LoginSection = ({
  title,
  username,
  password,
  onChange,
  onLogin,
}: LoginSectionProps) => {
  return (
    <section className='login-section'>
      <Title order={3} ta={'center'}>{title}</Title>
      <LoginForm
        username={username}
        password={password}
        onChange={onChange}
        onSubmit={onLogin}
      />
    </section>
  )
}

export default LoginSection
