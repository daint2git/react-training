import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

<<<<<<< HEAD
import createRootReducer from './reducers'
// import rootSaga from './sagas'
=======
import createReducer from './reducers'
import rootSaga from './sagas'
>>>>>>> 9e07edacd769f39f4987a7395c839ab434c6400a

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

<<<<<<< HEAD
  const store = createStore(createRootReducer(), initialState, composeEnhancers(...enhancers))

  // sagaMiddleware.run(rootSaga)

=======
  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))

>>>>>>> 9e07edacd769f39f4987a7395c839ab434c6400a
  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry
<<<<<<< HEAD
=======

  // sagaMiddleware.run(rootSaga)
>>>>>>> 9e07edacd769f39f4987a7395c839ab434c6400a

  return store
}
