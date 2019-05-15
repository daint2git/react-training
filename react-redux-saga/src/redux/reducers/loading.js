const actionTypes = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
}

const initalState = {
  isLoading: false,
}

export const startLoading = () => ({
  type: actionTypes.START_LOADING,
})

export const stopLoading = () => ({
  type: actionTypes.STOP_LOADING,
})

const loading = (state = initalState, action) => {
  const { type } = action
  switch (type) {
    case actionTypes.START_LOADING:
      return { isLoading: true }
    case actionTypes.STOP_LOADING:
      return { isLoading: false }
    default:
      return state
  }
}

export default loading
