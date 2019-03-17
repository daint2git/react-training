import ActionTypes from './actionTypes'

const initialState = () => ({
  count: 0,
})

export const increase = () => ({
  type: ActionTypes.INCREASE,
})

export const decrease = () => ({
  type: ActionTypes.DECREASE,
})

export const reset = () => ({
  type: ActionTypes.RESET,
})

const counter = (state = initialState(), action) => {
  const { type } = action
  switch (type) {
    case ActionTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      }
    case ActionTypes.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    case ActionTypes.RESET:
      return {
        ...state,
        count: initialState().list,
      }
    default:
      return state
  }
}

export default counter
