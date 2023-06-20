import React from 'react'
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from '../App/App'
import Button from '../common/components/atoms/Button/Button'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<Button>Test</Button>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
)

export default router
