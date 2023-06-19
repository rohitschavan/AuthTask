import React from 'react'
import { TextProps, Text as MantineText } from '@mantine/core'
import './Text.scss'

interface customTextProps extends TextProps {
  children: string
}

const Text: React.FC<customTextProps> = ({
  children,
  size = 'sm',
  ...textProps
}) => {
  return (
    <MantineText className={size as string} {...textProps} size={size}>
      {children}
    </MantineText>
  )
}

export default Text
