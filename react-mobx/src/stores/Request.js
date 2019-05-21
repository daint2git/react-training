import axios from 'axios'
import LoaderStore from './LoaderStore'

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    LoaderStore.startLoading()
    console.log('request', config)
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    LoaderStore.stopLoading()
    console.log('response', response)
    return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  },
)

const Request = async config => {
  const res = await axios(config)

  return res
}

export default Request
