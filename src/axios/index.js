import axios from 'axios'
import config from './config'
import storageInstance from '@/utils/storageInstance'

const axiosInstance = axios.create({
  baseURL: config.api,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosInstance.interceptors.request.use(
  (config) => {
    const token = storageInstance.getStorage('token');
    if (token != null) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)


axiosInstance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.response.data.status === 401) {}
    // return error;
    return Promise.reject(error)
  }
)

export default axiosInstance