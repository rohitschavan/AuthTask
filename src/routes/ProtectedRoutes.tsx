import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStore from '../services/common/auth/authStore'

interface ProtectedRoutesProps {
  children: JSX.Element
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoutes
