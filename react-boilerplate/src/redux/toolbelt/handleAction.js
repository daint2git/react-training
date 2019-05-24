import produce from 'immer'

import either from './either'

const handleAction = (targetAction, updater, initalState = {}) => (state = initalState, action) => {
  const { type, payload } = action
  if (type !== either(targetAction.type)(targetAction)) return state
  return produce(state, draft => updater(draft, payload))
}

export default handleAction
