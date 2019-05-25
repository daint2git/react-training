import { createMiddleware } from 'redux/toolbelt'

import { preventSubmit, start, stop } from './reducer'

const loading = ({ dispatch }, next, action) => {
  dispatch(preventSubmit())
  const timerId = setTimeout(() => dispatch(start()), 300)
  return next(action)
    .then(response => {
      clearTimeout(timerId)
      dispatch(stop())
      return response
    })
    .catch(error => {
      clearTimeout(timerId)
      dispatch(stop())
      return Promise.reject(error) // eslint-disable-line prefer-promise-reject-errors
    })
}

const loadingMiddleware = targetActions => createMiddleware(targetActions, loading)

export default loadingMiddleware
