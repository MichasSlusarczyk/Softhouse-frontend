import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios'
import config from 'config/constants'

class Api {
  protected api: AxiosInstance = axios.create({
    baseURL: config.api,
    withCredentials: true,
  })

  // constructor() {
  //     this.api.interceptors.request.use(this.handleRequest)
  // }

  // private handleRequest = (requestConfig:AxiosRequestConfig)=>{
  //     requestConfig.headers['X-Api-Key']=config.api,
  // }
}

export default Api
