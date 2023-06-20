import React from 'react'
import { Button as MantineButton } from '@mantine/core'
import './Button.scss'
import { ReactComponent as DeliverIcon } from '../../../assets/icons/delivered.svg'
import { ReactComponent as CancelIcon } from '../../../assets/icons/cancelled.svg'
import { ReactComponent as NotDeliveredIcon } from '../../../assets/icons/notDelivered.svg'
import { ReactComponent as ShippedIcon } from '../../../assets/icons/shipped.svg'

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
  const svg = (variant: string) => {
    switch (variant) {
      case 'changetoDeliver':
        return <ShippedIcon />
      case 'changetoPackage':
        return <DeliverIcon />
      case 'changetoCancel':
        return <CancelIcon />
      case 'changetoNotDeliver':
        return <NotDeliveredIcon />
      case 'default':
        return undefined
    }
  }
  return (
    <MantineButton
      className={variant}
      leftIcon={svg(variant)}
      fullWidth={fullWidth}
    >
      {children}
    </MantineButton>
  )
}

export default Button
