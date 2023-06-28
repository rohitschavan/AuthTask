import React from 'react'
import { AppShell as MantineAppShell } from '@mantine/core'
import './AppShell.scss'
import Navbar from '../../organisms/Navbar/Navbar'
import Header from '../../organisms/Header/Header'

interface appshellProps {
  children?: React.ReactNode
}

const Appshell = ({ children }: appshellProps) => {
  return (
    <MantineAppShell
      padding="md"
      layout="alt"
      navbar={<Navbar />}
      header={<Header />}
    >
      {children}
    </MantineAppShell>
  )
}

export default Appshell
