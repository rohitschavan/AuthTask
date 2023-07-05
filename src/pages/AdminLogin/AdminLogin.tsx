import React, { useState } from 'react'
import LoginSection from '../../common/components/organisms/LoginSection/LoginSection'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import useAuthStore from '../../services/auth/authStore'
import useAPI from '../../common/hooks/useAPI'
import { userLogin } from '../../utils/apiReferences'
import Cookies from 'js-cookie'
import Button from '../../common/components/atoms/Button/Button'
import { setCookies } from '../../utils/cookies'

interface UserLogin {
  email: string
  password: string
}

const AdminLogin = () => {
  const userdata = useAuthStore((state) => state.userLogin)
  const setUserLogin = useAuthStore((state) => state.setUserLogin)
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)

  // Method to get data from cookies
  const GetCookie = () => {
    alert(Cookies.get('accessToken'))
  }
  // const [userData, setUserData] = useState({
  //   data: null,
  //   error: null,
  //   isLoading: false,
  // })
  // const [apiCalls, makeApiCall] = useAPI()

  // const userLogin = apiCalls['userLogin']

  // const userLoginData = userLogin?.data
  // const userLoginError = userLogin?.error
  // const userLoginLoading: boolean = userLogin?.isLoading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userdata, [e.target.name]: e.target.value })
  }
  const handleLogin = (values: UserLogin) => {
    userLogin(values).then((data) => {
      if (data) {
        setCookies('accessToken', data.accessToken)
      }
    })
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
