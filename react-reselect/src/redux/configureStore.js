import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'

export default function configureStore(initialState = {}) {
  const middlewares = []

  const enhancers = [applyMiddleware(...middlewares)]

  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
  /* eslint-enable */

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))

  return store
}
