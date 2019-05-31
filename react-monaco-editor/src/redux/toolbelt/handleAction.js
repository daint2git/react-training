import produce from 'immer'

import noop from './utils/noop'
import either from './utils/either'

const handleAction = (targetAction, updater = noop, initalState = {}) => {
  const targetActionType = either(targetAction.type)(targetAction)
  const reducer = (state = initalState, action) =>
    action.type !== targetActionType ? state : produce(state, draft => updater(draft, action))
  reducer.targetActionType = targetActionType
  return reducer
}

export default handleAction
