interface ChangePasswordFormProps {
  oldPassword: string
  newPassword: string
  onChange: (field: string, value: string) => void
  onSubmit: () => void
}