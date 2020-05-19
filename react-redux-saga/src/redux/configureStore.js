import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import createReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware, logger]

  const enhancers = [applyMiddleware(...middlewares)]

  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
  /* eslint-enable */

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  // sagaMiddleware.run(rootSaga)

  return store
}
