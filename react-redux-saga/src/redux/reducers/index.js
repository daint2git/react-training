import { combineReducers } from 'redux'

import loading from './loading'

export default (injectedReducers = {}) =>
  combineReducers({
    loading,
    ...injectedReducers,
  })
