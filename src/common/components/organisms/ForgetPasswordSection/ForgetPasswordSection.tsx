import React from 'react'
import Button from 'common/components/atoms/Button'
import Input from 'common/components/atoms/Input'
import { Title, Anchor, Text } from '@mantine/core'

import './ForgetPasswordSection.scss'
import { NavLink } from 'react-router-dom'

const ForgetPasswordSection = ({
  onChange,
  onSubmit,
  data,
}: ForgetFormProps) => {
  return (
    <form className="forget-password">
      <h1 className='heading'>
        Forgot Password
      </h1>
      <Input
        placeholder={'email'}
        onChange={onChange}
        label={'Forget Password'}
        value={data}
        type={'text'}
        name="forgetPassword"
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
      <NavLink to={'/login'}>
        <Text ta={'right'} color="blue.5" td={'underline'} fw={700} fz={'xxs'}>
          Back to Login
        </Text>
      </NavLink>
    </form>
  )
}

export default ForgetPasswordSection
