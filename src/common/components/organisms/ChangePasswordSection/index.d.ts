interface ChangePasswordSectionProps {
  title: string
  newPassword: string
  oldPassword: string
  onChange: (field: string, value: string) => void
  onSubmit: () => void
}