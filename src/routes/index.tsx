import React from 'react'
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from '../App/App'
import AdminLogin from '../pages/AdminLogin/AdminLogin'
import AgencyLogin from '../pages/AgencyLogin/AgencyLogin'
import VendorLogin from '../pages/VendorLogin/VendorLogin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/agency-login" element={<AgencyLogin />}></Route>
        <Route path="/vendor-login" element={<VendorLogin />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </>
  )
)

export default router
