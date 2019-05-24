export const AXIOS = '@@redux-effects-axios'

export const axiosMiddleware = () => next => action => {
  const { type, payload } = action
  if (type !== AXIOS) return next(action)
  const { instance, request } = payload
  return instance(request)
}
