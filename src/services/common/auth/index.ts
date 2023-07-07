import instance from 'utils/axios'

export const userLogin = async (payload: any, userType: string) => {
  try {
    const response = await instance.put(`/${userType}/auth/login`, payload)
    return Promise.resolve(response)
  } catch (err) {
    return Promise.reject(err)
  }
  // const response = await instance.put(`/${userType}/auth/login`, payload)
  // return response.data
}

export const sendForgetPassword = async (payload: any, userType: string) => {
  const response = await instance.put(
    `/${userType}/auth/password/forgot`,
    payload
  )
  return response.data
}
