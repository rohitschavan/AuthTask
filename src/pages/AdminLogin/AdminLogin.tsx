import React from 'react'
import LoginSection from '../../common/components/organisms/LoginSection/LoginSection'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import useAuthStore from '../../services/auth/authStore'

const AdminLogin = () => {
  const userdata = useAuthStore((state) => state.userLogin)
  const setUserLogin = useAuthStore((state) => state.setUserLogin)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userdata, [e.target.name]: e.target.value })
  }
  const handleLogin = () => {
    console.log(userdata)
  }
  return (
    <FormLayout>
      <LoginSection
        title="Admin Login"
        data={userdata}
        onChange={handleChange}
        onLogin={handleLogin}
      />
    </FormLayout>
  )
}

export default AdminLogin
