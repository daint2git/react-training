import createAction from './createAction'

const ERROR = 'ERROR'

const payloadError = error => ({
  ...error.data,
  status: error.status,
})

const createErrorAction = type => createAction(`${ERROR}/${type}`, true, payloadError)

export default createErrorAction
