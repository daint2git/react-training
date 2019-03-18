import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { login } from './authReducer'

import StoreContext from './Context'

const styles = {
  fontSize: '25px',
  padding: '15px',
  backgroundColor: 'aquamarine',
}

const useFormState = initialState => {
  const [state, setState] = useState(initialState)
  return {
    value: state,
    onChange: e => setState(e.target.value),
  }
}

const Login = props => {
  const { location } = props
  const userName = useFormState('')
  const password = useFormState('')
  const { appState, dispatch } = useContext(StoreContext)

  const onSubmit = () =>
    dispatch(
      login({
        userName: userName.value,
        password: password.value,
      }),
    )

  return appState.user.isAuthenticated ? (
    <Redirect to={location.state.from} />
  ) : (
    <div style={styles}>
      <h2>Login</h2>
      <input type="text" name="userName" {...userName} />
      <input type="password" name="password" {...password} />
      <button type="button" onClick={onSubmit}>
        Log in
      </button>
    </div>
  )
}

export default Login
