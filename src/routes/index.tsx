import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword'
import ChangePassword from '../pages/ChangePassword/ChangePassword'
import ProtectedRoutes from './ProtectedRoutes'
import Appshell from '../common/components/templates/AppShell/AppShell'
import Login from '../pages/Login/Login'
import DashboardTable from 'common/components/molecules/DashboardTable/DashboardTable'

type RouterProps = {
  domain: string
}

export const Router = ({ domain }: RouterProps) => {
  return (
    <Routes>
      <Route path="/" element={<Login userType={domain} />} />
      <Route path="/login" element={<Login userType={domain} />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Appshell>
              <DashboardTable />
            </Appshell>
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}
