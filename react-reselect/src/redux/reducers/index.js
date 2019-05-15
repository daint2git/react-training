import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import counterReducer from './counterReducer'

export default combineReducers({
  todoReducer,
  counterReducer,
})
