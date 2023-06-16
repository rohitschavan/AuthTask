import React from 'react'
import { TextInput } from '@mantine/core'
import './Input.scss'

const Input = ({ placeholder, onChange, label }: InputTypes) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChange={onChange}
      label={label}
    />
  )
}

export default Input
