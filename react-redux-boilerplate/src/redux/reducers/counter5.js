import { createAction, handleActions, handleAction } from '../toolbelt'

const initialState = {
  count: 0,
}

export const incrementCount = createAction('INCREMENT5')
export const decrementCount = createAction('DECREMENT5')
export const resetCount = createAction('RESET5', undefined, () => 0)

export default handleActions(
  [
    handleAction(incrementCount, state => ({ count: state.count + 1 })),
    handleAction(decrementCount, state => ({ count: state.count - 1 })),
    handleAction(resetCount, (_, { payload }) => ({ count: payload })),
  ],
  initialState,
)
