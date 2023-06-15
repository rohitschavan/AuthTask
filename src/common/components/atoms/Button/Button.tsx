import React from 'react'
import { Button as MantineButton } from '@mantine/core'
import './Button.scss'

interface customButtonProps {
  variant?: string
  children: string
  fullWidth?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
}: customButtonProps) => {
  return (
    <MantineButton className={variant} leftIcon={''} fullWidth={fullWidth}>
      {children}
    </MantineButton>
  )
}

export default Button
