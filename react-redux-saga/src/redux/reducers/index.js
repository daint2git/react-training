import { combineReducers } from 'redux'

import loading from './loading'

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    loading,
    ...injectedReducers,
  })
}
