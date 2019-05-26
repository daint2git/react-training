import createAction from './createAction'
import createErrorAction from './createErrorAction'

const SUCCESS = 'SUCCESS'
const FAIL = 'FAIL'

const createSideEffectAction = type => [
  createAction(`${type}/${SUCCESS}`),
  createErrorAction(`${type}/${FAIL}`),
]

export default createSideEffectAction
