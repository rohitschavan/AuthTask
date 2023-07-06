import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../services/auth/authStore'

interface ProtectedRoutesProps {
  children: JSX.Element
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isAuthenticated = true

  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoutes
