import React, { useState } from 'react'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import ChangePasswordSection from '../../common/components/organisms/ChangePasswordSection/ChangePasswordSection'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const handleInputChange = (field: string, value: string) => {
    if (field === 'oldPassword') {
      setOldPassword(value)
    } else if (field === 'newPassword') {
      setNewPassword(value)
    }
  }
  const handleLogin = () => {
    //api calls or login logic
    console.log(oldPassword, newPassword)
  }
  return (
    <FormLayout>
      <ChangePasswordSection
        title="Change Password"
        oldPassword={oldPassword}
        newPassword={newPassword}
        onChange={handleInputChange}
        onSubmit={handleLogin}
      />
    </FormLayout>
  )
}

export default ChangePassword
