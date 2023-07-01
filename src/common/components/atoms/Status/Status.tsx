import React from 'react'
import { Badge } from '@mantine/core'
import { ReactComponent as MoneyIcon } from '../../../assets/icons/money.svg'
import { ReactComponent as PreparingIcon } from '../../../assets/icons/preparing.svg'
import { ReactComponent as TransitIcon } from '../../../assets/icons/shipped.svg'
import { ReactComponent as DevliveredIcon } from '../../../assets/icons/delivered.svg'
import { ReactComponent as CancelledIcon } from '../../../assets/icons/cancelled.svg'
import { ReactComponent as NotDeliveredIcon } from '../../../assets/icons/notDelivered.svg'
import './Status.scss'

interface StatusProps {
  variant?:
    | 'awaitingPayment'
    | 'preparingtoShip'
    | 'inTransit'
    | 'delivered'
    | 'cancelled'
    | 'notDelivered'
    | 'default'
  children: React.ReactNode
}

const Status = ({ variant = 'default', children }: StatusProps) => {
  const svg = (variant: string) => {
    switch (variant) {
      case 'awaitingPayment':
        return <MoneyIcon />
      case 'preparingtoShip':
        return <PreparingIcon />
      case 'inTransit':
        return <TransitIcon />
      case 'delivered':
        return <DevliveredIcon />
      case 'cancelled':
        return <CancelledIcon />
      case 'notDelivered':
        return <NotDeliveredIcon />
      case 'default':
        return ''
    }
  }

  return (
    <Badge leftSection={svg(variant)} variant="filled" className={variant}>
      {children}
    </Badge>
  )
}

export default Status
