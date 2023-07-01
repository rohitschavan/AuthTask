import { create } from 'zustand'

interface UserLogin {
  username: string
  password: string
}

interface changePasswordProps {
  newPassword: string
  oldPassword: string
}

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  userLogin: UserLogin
  setUserLogin: (data: UserLogin) => void
  changePassword: changePasswordProps
  setchangePassword: (data: changePasswordProps) => void
  forgetPassword: string
  setforgetPassword: (data: string) => void
  login: (accessToken: string, refreshToken: string) => void
  logout: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  forgetPassword: '',
  userLogin: {
    username: '',
    password: '',
  },
  changePassword: {
    newPassword: '',
    oldPassword: '',
  },

  setUserLogin: (data) => {
    set(() => ({
      userLogin: { ...data },
    }))
  },

  login: (accessToken, refreshToken) => {
    set(() => ({
      accessToken,
      refreshToken,
      isAuthenticated: true,
    }))
  },

  logout: () => {
    set(() => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    }))
  },
  setforgetPassword: (data) => {
    set(() => ({
      forgetPassword: data,
    }))
  },

  setchangePassword: (data) => {
    set(() => ({
      changePassword: { ...data },
    }))
  },
}))

export default useAuthStore
