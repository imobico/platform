import Cookies from 'js-cookie'

import { axiosClient } from '@/utils'

export const useLogin = () => {
  const handleLogin = (credentials: { email: string; password: string }) => {
    return axiosClient
      .post('/signin', {
        email: credentials.email,
        password: credentials.password
      })
      .then((res) => {
        Cookies.set('auth_token', res.data.data.access_token)
      })
  }

  return handleLogin
}
