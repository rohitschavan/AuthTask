import React from 'react'
import { Card as MantineCard } from '@mantine/core'
import './Card.scss'

interface cardProps {
  children?: React.ReactNode
}

const Card = ({ children }: cardProps) => {
  return <MantineCard>{children}</MantineCard>
}

export default Card
