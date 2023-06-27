import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import './LoginForm.scss'
import Text from '../../atoms/Text/Text'
import { Anchor } from '@mantine/core'



const LoginForm = ({
  username,
  password,
  onChange,
  onSubmit,
}: LoginFormProps) => {
  return (
    <form className="login-form">
      <Input
        placeholder={'placeholder'}
        onChange={(value) => onChange('username', value)}
        label={'Username'}
        value={username}
        type={'text'}
      />
      <Input
        placeholder={'placeholder'}
        onChange={(value) => onChange('password', value)}
        label={'Password'}
        value={password}
        type="email"
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
      {/* Please verify it  */}
      {/* or */}
      {/* <Button onClick={onSubmit} fullWidth className="button-wrapper">
        Submit
      </Button> */}
    </form>
  )
}

export default LoginForm
