import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import { loadingMiddleware } from 'redux/middlewares/redux-effects-loading'
import { axiosMiddleware, AXIOS } from 'redux/middlewares/redux-effects-axios'
import { stepsMiddleware } from 'redux/middlewares/redux-effects-steps'

import createRootReducer from './reducers/rootReducer'

export default function configureStore(initialState = {}, history = {}) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
  /* eslint-enable */

  const middlewares = [
    routerMiddleware(history),
    loadingMiddleware([AXIOS]),
    axiosMiddleware,
    stepsMiddleware,
  ]

  const enhancers = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(createRootReducer(history), initialState, enhancers)

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/rootReducer', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
  return store
}
