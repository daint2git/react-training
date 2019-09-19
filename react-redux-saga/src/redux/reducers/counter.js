export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC,
})

const initialState = {
  count: 0,
}

const counter = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default counter
