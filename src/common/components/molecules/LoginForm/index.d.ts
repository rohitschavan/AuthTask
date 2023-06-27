interface LoginFormProps {
  username: string
  password: string
  onChange: (field: string, value: string) => void
  onSubmit: () => void
}