export const initialState = {
  user: {
    name: '',
    password: '',
    role: null,
    isAuthenticated: false,
  },
}

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

export const login = payload => ({
  type: actionTypes.LOGIN,
  payload,
})

export const logout = () => ({
  type: actionTypes.LOGOUT,
})

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.LOGIN:
      if (payload.userName.toLowerCase() === 'dai' && payload.password === 'password') {
        return {
          ...state,
          user: {
            name: payload.userName,
            password: payload.password,
            role: 'ADMIN',
            isAuthenticated: true,
          },
        }
      }
      return state
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: {
          ...initialState,
        },
      }
    default:
      return state
  }
}

export default reducer
