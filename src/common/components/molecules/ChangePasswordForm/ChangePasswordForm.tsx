import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'

import './ChangePasswordForm.scss'



const ChangePasswordForm = ({
  oldPassword,
  newPassword,
  onChange,
  onSubmit,
}: ChangePasswordFormProps) => {
  return (
    <form className="change-password-form">
      <Input
        placeholder={'placeholder'}
        onChange={(value) => onChange('oldPassword', value)}
        label={'Old Password'}
        value={oldPassword}
        type={'password'}
      />
      <Input
        placeholder={'placeholder'}
        onChange={(value) => onChange('newPassword', value)}
        label={'New Password'}
        value={newPassword}
        type="password"
      />
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

export default ChangePasswordForm
