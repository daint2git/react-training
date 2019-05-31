const handleActions = (reducers = [], initalState = {}) => (state = initalState, action) => {
  const targetReducer = reducers.find(reducer => action.type === reducer.targetActionType)
  return !targetReducer ? state : targetReducer(state, action)
}

export default handleActions
