import conformsTo from 'lodash-es/conformsTo'
import isFunction from 'lodash-es/isFunction'
import isObject from 'lodash-es/isObject'
import invariant from 'invariant'

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  }
  invariant(conformsTo(store, shape), '(app/utils...) injectors: Expected a valid redux store')
}
