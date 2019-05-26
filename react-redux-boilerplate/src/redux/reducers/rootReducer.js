import { combineReducers } from 'redux'

import counter from './counter'
import counter2 from './counter2'
import counter3 from './counter3'
import counter4 from './counter4'
import counter5 from './counter5'

export default combineReducers({
  counter2,
  counter,
  counter3,
  counter4,
  counter5,
})
