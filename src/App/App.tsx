import React from 'react'
import './App.scss'
import { Outlet } from 'react-router-dom'
import Appshell from '../common/components/templates/AppShell/AppShell'

const App = () => {
  return (
    <div className="App">
      <Appshell>
        <Outlet />
      </Appshell>
    </div>
  )
}

export default App
