import { create } from 'zustand'

interface UserLogin {
  email: string
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
  setIsAuthenticated: (data: boolean) => void
  setforgetPassword: (data: string) => void
  login: (accessToken: string, refreshToken: string) => void
  logout: () => void
  text: string | null
  setText: (data: string) => void
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  forgetPassword: '',
  text: null,
  userLogin: {
    email: '',
    password: '',
  },
  changePassword: {
    newPassword: '',
    oldPassword: '',
  },

  setText: (data) => {
    set(() => ({
      text: data,
    }))
  },
  
  setUserLogin: (data) => {
    set(() => ({
      userLogin: { ...data },
    }))
  },
  setIsAuthenticated: (data) => {
    set(() => ({
      isAuthenticated: data,
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
