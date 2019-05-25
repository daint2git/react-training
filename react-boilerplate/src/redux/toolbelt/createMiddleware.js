import noop from './utils/noop'
import either from './utils/either'

const createMiddleware = (targetActions = [], handler = noop) => store => next => action =>
  targetActions.some(targetAction => action.type === either(targetAction.type)(targetAction))
    ? handler(store, next, action)
    : next(action)

export default createMiddleware
