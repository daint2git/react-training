const handleActions = (reducers = [], initalState = {}) => (state = initalState, action) =>
  reducers.reduce((resultState, reducer) => reducer(resultState, action), state)

export default handleActions
