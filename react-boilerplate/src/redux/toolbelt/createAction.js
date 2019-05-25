import identity from './utils/identity'
import noop from './utils/noop'

const createAction = (type, error = false, payloadCreator = identity, metaCreator = noop) => {
  const actionCreator = (...args) => ({
    type,
    error,
    payload: payloadCreator(...args),
    meta: metaCreator(...args),
  })
  actionCreator.type = type
  return actionCreator
}

export default createAction
