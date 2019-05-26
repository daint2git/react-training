import createAction from 'redux-actions/es/createAction'
import handleActions from 'redux-actions/es/handleActions'

const initialState = {
  count: 0,
}

export const incrementCount = createAction('INCREMENT4')
export const decrementCount = createAction('DECREMENT4')
export const resetCount = createAction('RESET4')

// export default handleActions(
//   new Map([
//     [incrementCount, state => ({ count: state.count + 1 })],
//     [decrementCount, state => ({ count: state.count - 1 })],
//     [resetCount, () => ({ count: 0 })],
//   ]),
//   initialState,
// )

export default handleActions(
  {
    INCREMENT4: state => ({ count: state.count + 1 }),
    DECREMENT4: state => ({ count: state.count - 1 }),
    RESET4: () => ({ count: 0 }),
  },
  initialState,
)
