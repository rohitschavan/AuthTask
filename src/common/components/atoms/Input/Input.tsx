import React from 'react'
import { TextInput, createStyles } from '@mantine/core'

interface InputTypes {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  radius?: string
}

const useStyles = createStyles((theme) => ({
  label: {
    fontSize: theme.fontSizes.xxs,
    // will update after the merges of previous branches
    fontWeight: 700,
  },
  input: {
    borderRadius: theme.radius.xs,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[4],
    // will update after the merges of previous branches
    fontWeight: 700,
  },
}))
const Input = ({ placeholder, onChange, label }: InputTypes) => {
  const { classes } = useStyles()
  return (
    <TextInput
      placeholder={placeholder}
      onChange={onChange}
      label={label}
      classNames={{ label: classes.label, input: classes.input }}
    />
  )
}

export default Input
