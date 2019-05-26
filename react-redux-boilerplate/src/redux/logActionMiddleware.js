import { createMiddleware } from './toolbelt'

function logActionHandler(store, next, action) {
  console.log('logActionHandler', { store, next, action })
  return next(action)
}

export default function logActionMiddleware() {
  return createMiddleware(['INCREMENT5'], logActionHandler)
}
