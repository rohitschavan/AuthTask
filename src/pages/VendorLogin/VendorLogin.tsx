import React from 'react'
import LoginSection from '../../common/components/organisms/LoginSection/LoginSection'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import useAuthStore from '../../services/auth/authStore'

const VendorLogin = () => {
  const userdata = useAuthStore((state) => state.userLogin)
  const setUserLogin = useAuthStore((state) => state.setUserLogin)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userdata, [e.target.name]: e.target.value })
  }
  const handleLogin = () => {
    //api calls or login logic
    console.log(userdata)
  }
  return (
    <FormLayout>
      <LoginSection
        title="Vendor Login"
        data={userdata}
        onChange={handleChange}
        onLogin={handleLogin}
      />
    </FormLayout>
  )
}

export default VendorLogin
