import either from './either'

const createMiddleware = (targetActions = [], middleware) => store => next => action => {
  if (!targetActions.find(targetAction => action.type === either(targetAction.type)(targetAction)))
    return next(action)
  return middleware(store, next, action)
}

export default createMiddleware
