import Cookies from 'js-cookie'

import { axiosClient } from '@/utils'

export const useLogin = () => {
  const handleLogin = async (credentials: { email: string; password: string }) => {
    const user = await axiosClient
      .post('/signin', {
        email: credentials.email,
        password: credentials.password
      })
      .then((res) => {
        console.log(res)
        Cookies.set('token', res.data.token)
        return res.data.user
      })

    return user
  }

  return handleLogin
}
