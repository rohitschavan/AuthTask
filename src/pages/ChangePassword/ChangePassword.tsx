import React from 'react'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import ChangePasswordSection from '../../common/components/organisms/ChangePasswordSection/ChangePasswordSection'
import useAuthStore from '../../services/common/auth/authStore'

const ChangePassword = () => {
  const changePassword = useAuthStore((state) => state.changePassword)
  const setchangePassword = useAuthStore((state) => state.setchangePassword)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setchangePassword({ ...changePassword, [e.target.name]: e.target.value })
  }
  const handleLogin = () => {
    //api calls or login logic
    console.log(changePassword)
  }
  return (
    <FormLayout>
      <ChangePasswordSection
        title="Change Password"
        data={changePassword}
        onChange={handleChange}
        onSubmit={handleLogin}
      />
    </FormLayout>
  )
}

export default ChangePassword
