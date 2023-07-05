import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: 'https://asia-northeast1-tea-sales-staging.cloudfunctions.net/api2', // Set your API base URL here
})

instance.interceptors.request.use(
  (config: any) => {
    // Get the access token from your storage (e.g., localStorage, Redux store, etc.)
    const accessToken = Cookies.get('accessToken')
    // Attach the access token to the request headers
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: any) => {
    return response
  },
  async (error: any) => {
    const originalRequest = error.config

    // Check for a 401 Unauthorized error and a valid refresh token
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        // Perform the refresh token request to get a new access token
        const refreshToken = localStorage.getItem('refreshToken')
        const refreshResponse = await instance.post('/admin/auth/refresh', {
          refreshToken,
        })

        // Update the access token in your storage
        const newAccessToken = refreshResponse.data.accessToken
        localStorage.setItem('accessToken', newAccessToken)

        // Attach the new access token to the original request headers
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

        // Retry the original request
        return instance(originalRequest)
      } catch (refreshError) {
        // Handle the refresh error (e.g., redirect to login, logout, etc.)
        // ...

        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
export default instance
