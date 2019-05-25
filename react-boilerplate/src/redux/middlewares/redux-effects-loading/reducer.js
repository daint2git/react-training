const CONTEXT = '@@redux-effects-loading'
// action types
const PREVENT_SUBMIT = `${CONTEXT}/PREVENT_SUBMIT`
const START = `${CONTEXT}/START`
const STOP = `${CONTEXT}/STOP`

// action creators
export const preventSubmit = () => ({ type: PREVENT_SUBMIT })
export const start = () => ({ type: START })
export const stop = () => ({ type: STOP })

const initalState = { shouldPreventSubmit: false, isLoading: false }

// reducer
export default (state = initalState, action) => {
  switch (action.type) {
    case PREVENT_SUBMIT:
      return { shouldPreventSubmit: true, isLoading: false }
    case START:
      return { shouldPreventSubmit: true, isLoading: false }
    case STOP:
      return { shouldPreventSubmit: true, isLoading: false }
    default:
      return state
  }
}
