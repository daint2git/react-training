import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import { logout } from './authReducer'
import StoreContext from './Context'

const UserInfo = props => {
  const { history } = props
  const { appState, dispatch } = useContext(StoreContext)

  const onSubmit = () => {
    dispatch(logout())
    history.push('/')
  }

  return appState.user.isAuthenticated ? (
    <div>
      <p>{`Welcome ${appState.user.name} !`}</p>
      <button type="button" onClick={onSubmit}>
        Log out
      </button>
    </div>
  ) : (
    <p>You are not logged in.</p>
  )
}

export default withRouter(UserInfo)
