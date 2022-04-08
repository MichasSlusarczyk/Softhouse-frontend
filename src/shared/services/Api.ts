import axios, { AxiosInstance } from 'axios'
import config from 'config'

class Api {
  protected api: AxiosInstance = axios.create({ baseURL: config.apiUrl })
}

export default Api
