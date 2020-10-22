import { combineReducers } from 'redux'

import loading from './loading'

<<<<<<< HEAD
export default (injectedReducers = {}) =>
  combineReducers({
    loading,
    ...injectedReducers,
  })
=======
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    loading,
    ...injectedReducers,
  })
}
>>>>>>> 9e07edacd769f39f4987a7395c839ab434c6400a
