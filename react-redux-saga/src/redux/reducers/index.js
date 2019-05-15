import { combineReducers } from 'redux'

import loading from './loading'
import repos from './repos'

export default combineReducers({
  loading,
  repos,
})
