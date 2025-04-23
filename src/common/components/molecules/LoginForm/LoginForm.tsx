import React from 'react'
import Input from 'common/components/atoms/Input'
import Button from 'common/components/atoms/Button'
import './LoginForm.scss'
import Text from 'common/components/atoms/Text'
import { NavLink } from 'react-router-dom'
import { useForm } from '@mantine/form'

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      className="login-form"
      onSubmit={form.onSubmit(() => {
        onSubmit(form.values)
      })}
    >
      <Input
        placeholder={'Enter Email'}
        label={'Username'}
        type={'text'}
        {...form.getInputProps('email')}
      />
      <Input
        placeholder={'Enter Password'}
        label={'Password'}
        type={'password'}
        {...form.getInputProps('password')}
      />
      <NavLink  to={'/forgot-password'}>
        <Text ta={'right'} color="black.5" td={'underline'} fw={700} fz={'xxs'}>
          Forgot Password
        </Text>
      </NavLink>
      <div className="button-wrapper">
        <Button fullWidth type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
