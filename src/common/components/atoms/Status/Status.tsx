import React, { useState } from 'react'
import { Badge } from '@mantine/core'
import { ReactComponent as MoneyIcon } from '../../../assets/icons/money.svg'
import { ReactComponent as PreparingIcon } from '../../../assets/icons/preparing.svg'
import { ReactComponent as TransitIcon } from '../../../assets/icons/shipped.svg'
import { ReactComponent as DevliveredIcon } from '../../../assets/icons/delivered.svg'
import { ReactComponent as CancelledIcon } from '../../../assets/icons/cancelled.svg'
import { ReactComponent as NotDeliveredIcon } from '../../../assets/icons/notDelivered.svg'

interface StatusProps {
  variant?:
    | string
    | 'awaitingPayment'
    | 'preparingtoShip'
    | 'inTransit'
    | 'delivered'
    | 'cancelled'
    | 'notDelivered'
  children: React.ReactNode
}

const Status: React.FC<StatusProps> = ({ variant = 'default', children }) => {
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

  const getColor = (variant: string) => {
    switch (variant) {
      case 'awaitingPayment':
        return 'orange.5'
      case 'preparingtoShip':
        return 'purple.4'
      case 'inTransit':
        return 'blue.3'
      case 'delivered':
        return 'green.6'
      case 'cancelled':
        return 'gray.5'
      case 'notDelivered':
        return 'red.3'
      case 'default':
        return 'gray.9'
    }
  }

  return (
    <Badge
      leftSection={svg(variant)}
      color={getColor(variant)}
      variant="filled"
    >
      {children}
    </Badge>
  )
}

export default Status
