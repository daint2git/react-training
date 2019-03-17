import ActionTypes from './actionTypes'

const initialState = () => ({
  list: [],
})

export const add = value => ({
  type: ActionTypes.ADD,
  payload: value,
})

export const clear = () => ({
  type: ActionTypes.CLEAR,
})

const todos = (state = initialState(), action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            value: payload,
          },
        ],
      }
    case ActionTypes.CLEAR:
      return {
        ...state,
        list: initialState().list,
      }
    default:
      return state
  }
}

export default todos
