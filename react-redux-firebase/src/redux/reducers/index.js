import { combineReducers } from 'redux'

import loading from './loading'
import todos from './todos'

export default combineReducers({
  loading,
  todos,
})
