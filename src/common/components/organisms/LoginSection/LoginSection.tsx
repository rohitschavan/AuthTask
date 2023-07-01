import React from 'react'
import LoginForm from '../../molecules/LoginForm/LoginForm'
import { Title } from '@mantine/core'
import './LoginSection.scss'

interface UserLogin {
  username: string
  password: string
}
interface LoginSectionProps {
  title: string
  data: UserLogin
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onLogin: () => void
}

const LoginSection = ({
  title,
  data,
  onChange,
  onLogin,
}: LoginSectionProps) => {
  return (
    <section className="login-section">
      <Title order={3} ta={'center'}>
        {title}
      </Title>
      <LoginForm data={data} onChange={onChange} onSubmit={onLogin} />
    </section>
  )
}

export default LoginSection
