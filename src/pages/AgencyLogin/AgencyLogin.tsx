import React, { useState } from 'react'
import LoginSection from '../../common/components/organisms/LoginSection/LoginSection'
import FormLayout from '../../common/components/templates/FormLayout/FormLayout'

const AgencyLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleInputChange = (field: string, value: string) => {
    if (field === 'username') {
      setUsername(value)
    } else if (field === 'password') {
      setPassword(value)
    }
  }
  const handleLogin = () => {
    //api calls or login logic
    console.log(username, password)
  }
  return (
    <FormLayout>
      <LoginSection
        title="Agency Login"
        username={username}
        password={password}
        onChange={handleInputChange}
        onLogin={handleLogin}
      />
    </FormLayout>
  )
}

export default AgencyLogin
