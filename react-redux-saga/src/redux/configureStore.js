import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import createRootReducer from './reducers'
// import rootSaga from './sagas'

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

  const store = createStore(createRootReducer(), initialState, composeEnhancers(...enhancers))

  // sagaMiddleware.run(rootSaga)

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  return store
}
