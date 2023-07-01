interface UserLogin {
  username: string
  password: string
}

interface LoginFormProps {
  data: UserLogin
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: () => void
}
