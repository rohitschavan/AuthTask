import React from 'react'
import { TextInput } from '@mantine/core'
import './Input.scss'

interface InputTypes {
  placeholder: string
  onChange: (value: string) => void
  label: string
  value: string
  type?: string
}

const Input = ({
  placeholder,
  onChange,
  label,
  value,
  type = 'text',
}: InputTypes) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      value={value}
      type={type}
    />
  )
}

export default Input
