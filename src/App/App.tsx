import React, { useEffect } from 'react'
import './App.scss'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../services/auth/authStore'
import { getCookies } from '../utils/cookies'
import { getApp } from '../utils/helper'

const App = () => {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
  const navigate = useNavigate()
  const { app: App, domain: subdomain } = getApp()

  useEffect(() => {
    if (getCookies('accessToken')) {
      setIsAuthenticated(true)
      navigate('/dashboard')
    }
  }, [])

  return (
    <div className="App">
      <App domain={subdomain} />
    </div>
  )
}

export default App
