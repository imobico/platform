import axios, { AxiosInstance } from 'axios'

const getAxiosClient = (): AxiosInstance => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL
  }

  const newAxiosInstance = axios.create(defaultOptions)

  // newAxiosInstance.interceptors.request.use(
  //   (config) => {
  //     config.headers['Content-Type'] = 'application/json;charset=utf-8'
  //     config.headers['Access-Control-Allow-Origin'] = '*'
  //     config.headers['Access-Control-Allow-Credentials'] = 'true'
  //     config.headers['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
  //     config.headers['Access-Control-Allow-Headers'] =
  //       'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  //     // config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
  //     return config
  //   },
  //   (error) => {
  //     console.log(`error`, error)
  //     return Promise.reject(error)
  //   }
  // )

  newAxiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(`error`, error)
      return Promise.reject(error)
    }
  )

  return newAxiosInstance
}

export const axiosClient = getAxiosClient()

export default axiosClient