import { useState, useEffect } from 'react'
import { AxiosRequestConfig, AxiosError } from 'axios'
import instance from '../../utils/axios'

interface ApiCall<T> {
  data: T | null
  error: string | null
  isLoading: boolean
}

type ApiCalls = {
  [key: string]: ApiCall<any>
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const useAPI = () => {
  const [apiCalls, setApiCalls] = useState<ApiCalls>({})

  const makeApiCall = async <T>(
    key: string,
    url: string,
    method: HttpMethod,
    body: any = null
  ) => {
    setApiCalls((prevState) => ({
      ...prevState,
      [key]: { data: null, error: null, isLoading: true },
    }))

    const config: AxiosRequestConfig = {
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (body) {
      config.data = body
    }

    try {
      const response = await instance.request<T>(config)

      setApiCalls((prevState) => ({
        ...prevState,
        [key]: { data: response.data, error: null, isLoading: false },
      }))
    } catch (error: any) {
      setApiCalls((prevState) => ({
        ...prevState,
        [key]: { data: null, error: error.message, isLoading: false },
      }))
    }
  }

  return [apiCalls, makeApiCall] as const
}

export default useAPI
