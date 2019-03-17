import { combineReducers } from 'redux'
import counter from './counter'
import todos from './totos'

export default combineReducers({
  counter,
  todos,
})
