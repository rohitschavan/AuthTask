import axios from 'axios'
import { MutationCache, QueryCache, QueryClient } from 'react-query'
// import { AuthConsumer } from 'store/AuthProvider'
// import { ToastConsumer } from 'store/ToastProvider';

import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // const toast = ToastConsumer();
          const { status } = error.response
          if (status === 401) {
            if (error.response.config.url) {
              if (error.response.config.url.includes('/login')) {
                // toast.error(error.response.data);
                console.log(error.response.data)
                return
              } else if (error.response.config.url.includes('/session')) {
                return
              }
            }
            // const auth = AuthConsumer()
            // await auth.signout()
            navigate('/login')
          }
        }
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: async (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // const toast = ToastConsumer();
          const { status } = error.response
          if (status === 401) {
            if (error.response.config.url) {
              if (error.response.config.url.includes('/login')) {
                // toast.error(error.response.data);
                console.log(error.response.data)
                return
              } else if (error.response.config.url.includes('/session')) {
                return
              }
            }
            // const auth = AuthConsumer()
            // await auth.signout()
            navigate('/login')
          } else {
            // toast.error(error.response.data);
            console.log(error.response.data)
          }
        }
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      // staleTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})
