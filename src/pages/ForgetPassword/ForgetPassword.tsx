import React from 'react'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import ForgetPasswordSection from '../../common/components/organisms/ForgetPasswordSection/ForgetPasswordSection'
import useAuthStore from '../../services/auth/authStore'

const ForgetPassword = () => {
  const username = useAuthStore((state) => state.forgetPassword)
  const setforgetPassword = useAuthStore((state) => state.setforgetPassword)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setforgetPassword(e.target.value)
  }

  const handleSubmit = () => {
    console.log(username)
  }
  return (
    <FormLayout>
      <ForgetPasswordSection
        data={username}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </FormLayout>
  )
}

export default ForgetPassword
