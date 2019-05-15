const actionTypes = {
  INCREMENT: 'INCREMENT',
}

export const increment = () => ({
  type: actionTypes.INCREMENT,
})

const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count + 1,
      }
    default:
      return state
  }
}

export default counterReducer
