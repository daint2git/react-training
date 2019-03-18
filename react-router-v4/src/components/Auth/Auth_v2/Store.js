import React, { useReducer } from 'react'
import authReducer, { initialState } from './authReducer'
import StoreContext from './Context'

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  return (
    <StoreContext.Provider value={{ appState: state, dispatch }}>{children}</StoreContext.Provider>
  )
}

export default Store
