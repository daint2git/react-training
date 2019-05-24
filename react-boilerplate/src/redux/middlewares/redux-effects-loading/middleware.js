import { createMiddleware } from 'redux/toolbelt'

import { preventSubmit, startLoading, stopLoading } from './reducer'

const loading = (store, next, action) => {
  const { dispatch } = store
  dispatch(preventSubmit())
  const timerId = setTimeout(() => dispatch(startLoading()), 100)
  return next(action)
    .then(response => {
      const { data } = response
      clearTimeout(timerId)
      dispatch(stopLoading())
      return data
    })
    .catch(error => {
      const { response } = error
      const { status, data } = response
      clearTimeout(timerId)
      dispatch(stopLoading())
      /* eslint-disable prefer-promise-reject-errors */
      return Promise.reject({ status, data })
      /* eslint-enable prefer-promise-reject-errors */
    })
}

const loadingMiddleware = targetActions => createMiddleware(targetActions, loading)

export default loadingMiddleware
