import { createAction, handleActions, handleAction } from 'redux/toolbelt'

const CONTEXT = '@@redux-effects-loading'

// action creators
export const preventSubmit = createAction(`${CONTEXT}/PREVENT_SUBMIT`)
export const start = createAction(`${CONTEXT}/START`)
export const stop = createAction(`${CONTEXT}/STOP`)

const initalState = { shouldPreventSubmit: false, isLoading: false }

export default handleActions(
  [
    handleAction(preventSubmit, () => ({ shouldPreventSubmit: true, isLoading: false })),
    handleAction(start, () => ({ shouldPreventSubmit: true, isLoading: true })),
    handleAction(stop, () => ({ shouldPreventSubmit: false, isLoading: false })),
  ],
  initalState,
)
