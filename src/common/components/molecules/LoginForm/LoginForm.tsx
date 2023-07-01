import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import './LoginForm.scss'
import Text from '../../atoms/Text/Text'
import { Anchor } from '@mantine/core'

const LoginForm = ({ onChange, data, onSubmit }: LoginFormProps) => {
  return (
    <form className="login-form">
      <Input
        placeholder={'placeholder'}
        onChange={onChange}
        name="username"
        label={'Username'}
        value={data.username}
        type={'text'}
      />
      <Input
        placeholder={'placeholder'}
        onChange={onChange}
        label={'Password'}
        value={data.password}
        type="password"
        name="password"
      />
      <Anchor href={''}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Hello
        </Text>
      </Anchor>
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
