import React, { ButtonHTMLAttributes } from 'react'
import { Button as MantineButton, ButtonProps } from '@mantine/core'
import './Button.scss'
import { ReactComponent as DeliverIcon } from '../../../assets/icons/delivered.svg'
import { ReactComponent as CancelIcon } from '../../../assets/icons/cancelled.svg'
import { ReactComponent as NotDeliveredIcon } from '../../../assets/icons/notDelivered.svg'
import { ReactComponent as ShippedIcon } from '../../../assets/icons/shipped.svg'

type ExtendedButtonProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string
  }

const Button = ({ variant = 'primary', ...props }: ExtendedButtonProps) => {
  if (props.style || props.styles || props.className || props.classNames) {
    throw new Error('Custom styles are not allowed')
  }
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
    <MantineButton className={`${variant}`} leftIcon={svg(variant)} {...props}>
      {props.children}
    </MantineButton>
  )
}

export default Button
