import { createActionWithPrefix, handleActions, handleAction } from 'redux/toolbelt'

const ROOT = '@@redux-effects-loading'
export const preventSubmit = createActionWithPrefix(ROOT)('PREVENT_SUBMIT')
export const startLoading = createActionWithPrefix(ROOT)('START_LOADING')
export const stopLoading = createActionWithPrefix(ROOT)('STOP_LOADING')

const INITIAL_STATE = () => ({
  shouldPreventSubmit: false,
  isLoading: false,
})

export default handleActions(
  [
    handleAction(preventSubmit, () => ({ shouldPreventSubmit: true, isLoading: false })),
    handleAction(startLoading, () => ({ shouldPreventSubmit: true, isLoading: true })),
    handleAction(stopLoading, () => ({ shouldPreventSubmit: false, loading: false })),
  ],
  INITIAL_STATE(),
)
