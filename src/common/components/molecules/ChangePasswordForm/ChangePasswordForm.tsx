import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'

import './ChangePasswordForm.scss'



const ChangePasswordForm = ({
  onChange,
  data,
  onSubmit,
}: ChangePasswordFormProps) => {
  return (
    <form className="change-password-form">
      <Input
        placeholder={'placeholder'}
        onChange={onChange}
        label={'Old Password'}
        value={data.oldPassword}
        type={'password'}
        name='oldPassword'
      />
      <Input
        placeholder={'placeholder'}
        onChange={onChange}
        label={'New Password'}
        value={data.newPassword}
        type="password"
        name={"newPassword"}
      />
      <div className="button-wrapper">
        <Button onClick={onSubmit} fullWidth>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ChangePasswordForm
