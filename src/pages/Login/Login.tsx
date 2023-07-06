import React from 'react'
import LoginSection from '../../common/components/organisms/LoginSection/LoginSection'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'
import useAuthStore from '../../services/auth/authStore'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../utils/apiReferences'
import { setCookies } from '../../utils/cookies'

const Login = ({ userType }: { userType: string }) => {
  const userdata = useAuthStore((state) => state.userLogin)
  const setUserLogin = useAuthStore((state) => state.setUserLogin)
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userdata, [e.target.name]: e.target.value })
  }
  const handleLogin = (values: UserLogin) => {
    userLogin(values, userType).then((data) => {
      if (data) {
        setCookies('accessToken', data.accessToken)
        setIsAuthenticated(true)
        navigate('/dashboard')
      }
    })
  }
  return (
    <FormLayout>
      <LoginSection
        title={`${userType} Login`}
        data={userdata}
        onChange={handleChange}
        onLogin={handleLogin}
      />
    </FormLayout>
  )
}

export default Login
