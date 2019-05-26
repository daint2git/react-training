import { createAction, handleActions, handleAction } from '../toolbelt'

const initialState = {
  count: 0,
}

export const incrementCount = createAction('INCREMENT2')
export const decrementCount = createAction('DECREMENT2')
export const resetCount = createAction('RESET2')

export default handleActions(
  [
    handleAction(incrementCount, state => ({ count: state.count + 1 })),
    handleAction(decrementCount, state => ({ count: state.count - 1 })),
    handleAction(resetCount, () => ({ count: 0 })),
  ],
  initialState,
)
