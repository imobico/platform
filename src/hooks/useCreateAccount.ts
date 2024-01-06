import Cookies from 'js-cookie'

import { axiosClient } from '@/utils'

export const useCreateAccount = () => {
  const handleCreateAccount = (credentials: { email: string; password: string }) => {
    return axiosClient
      .post('/signup', {
        email: credentials.email,
        password: credentials.password
      })
      .then((res) => {
        Cookies.set('auth_token', res.data.data.access_token)
      })
  }

  return handleCreateAccount
}
