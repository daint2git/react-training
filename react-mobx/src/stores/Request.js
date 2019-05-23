import axios from 'axios'
import CryptoJS from 'crypto-js'
import LoaderStore from './LoaderStore'

const SECRET_KEY = 'secret key 123'

axios.interceptors.request.use(
  function(config) {
    const data = {
      userName: 'dai',
      pass: 123,
    }
    // Encrypt
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
    console.log('ciphertext', ciphertext)
    window.localStorage.setItem(SECRET_KEY, ciphertext)

    // Decrypt
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY)
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    console.log('decryptedData', decryptedData)

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
    LoaderStore.stopLoading()
    return Promise.reject(error)
  },
)

const Request = async config => {
  const res = await axios(config)

  return res
}

export default Request
