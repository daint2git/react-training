import createAction from './createAction'

const ERROR = 'ERROR'

const errorHandler = error => ({
  errors: {
    data: { ...error.response.data },
    status: error.response.status,
  },
})

const createErrorAction = type => createAction(`${ERROR}/${type}`, true, errorHandler)

export default createErrorAction
