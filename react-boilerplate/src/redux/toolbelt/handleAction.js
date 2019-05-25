import produce from 'immer'

import noop from './utils/noop'
import either from './utils/either'

const handleAction = (targetAction = {}, updater = noop, initalState = {}) => (
  state = initalState,
  action,
) =>
  action.type !== either(targetAction.type)(targetAction)
    ? state
    : produce(state, draft => updater(draft, action))

export default handleAction
