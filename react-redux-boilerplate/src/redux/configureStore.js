import { createStore, compose, applyMiddleware } from 'redux'
import { ReduxEmitter } from 'kuker-emitters'

import rootReducer from './reducers/rootReducer'

export default function configureStore(initialState = {}) {
  const middlewares = [ReduxEmitter()]

  const enhancers = compose(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, initialState, enhancers)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/rootReducer', () => {
      const nextRootReducer = require('./reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
