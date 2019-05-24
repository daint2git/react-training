import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'

import { loadingMiddleware } from 'redux/middlewares/redux-effects-loading'
import { axiosMiddleware, AXIOS } from 'redux/middlewares/redux-effects-axios'
import { stepsMiddleware } from 'redux/middlewares/redux-effects-steps'

import createRootReducer from './reducers/rootReducer'

export default function configureStore(initialState = {}, history = {}) {
  const middlewares = [
    routerMiddleware(history),
    loadingMiddleware([AXIOS]),
    axiosMiddleware,
    stepsMiddleware,
  ]

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(createRootReducer(history), initialState, composeEnhancers)

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/rootReducer', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
  return store
}
