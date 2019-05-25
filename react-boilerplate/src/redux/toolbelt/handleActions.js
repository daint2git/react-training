const handleActions = (reducers = [], initalState = {}) => (state = initalState, action) =>
  reducers.reduce((nextState, reducer) => reducer(nextState, action), state)

export default handleActions
