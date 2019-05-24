const createAction = (type, error = false, payloadCreator = value => value, metaCreator = {}) => {
  const actionCreator = (...args) => ({
    type,
    error,
    payload: payloadCreator(...args),
    metaCreator,
  })
  actionCreator.type = type
  return actionCreator
}

export default createAction
