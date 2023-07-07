import axios from './axios'
import instance from './axios'
// GET request
export const getData = async () => {
  const response = await axios.get('/users')
  console.log(response.data)
  return response.data
}

export const userLogin = async (payload: any, userType: string) => {
  const response = await instance.put(`/${userType}/auth/login`, payload)
  return response.data
}

export const userLogout = async () => {
  const response = await axios.post('/admin/auth/logout')
  console.log(response.data)
  return response.data
}
