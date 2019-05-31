import axios from 'axios'

import { createAction } from 'redux/toolbelt'
import { AXIOS } from 'redux/middlewares/redux-effects-axios'

export const defaultAxios = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8080/api',
  timeout: 100000,
  withCredentials: true,
})

export const call = (request, instance = defaultAxios) => createAction(AXIOS)({ request, instance })

export const Request = {
  get(options) {
    return call({ method: 'get', options })
  },
  post(options) {
    return call({ method: 'post', options })
  },
  put(options) {
    return call({ method: 'put', options })
  },
  patch(options) {
    return call({ method: 'patch', options })
  },
  delete(options) {
    return call({ method: 'delete', options })
  },
}
