const initialState = () => ({
  count: 0,
})

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

// actionCreators
export const incrementCount = () => ({
  type: actionTypes.INCREMENT,
})

export const decrementCount = () => ({
  type: actionTypes.DECREMENT,
})

export const resetCount = () => ({
  type: actionTypes.RESET,
})

// reducer
const counter = (state = initialState(), action) => {
  const { type } = action
  switch (type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case actionTypes.RESET:
      return {
        ...state,
        count: initialState().count,
      }
    default:
      return state
  }
}

export default counter
