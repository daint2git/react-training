import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { loadingReducer as loading } from 'redux/middlewares/redux-effects-loading'

import counter from './counter'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loading,
    counter,
  })

export default rootReducer
