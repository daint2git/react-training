import { combineReducers } from 'redux'

import loading from './loading'
import repos from './repos'
import counter from './counter'

export default combineReducers({
  loading,
  repos,
  counter,
})
