import { createSelector } from 'reselect'

import { initialState } from 'redux/reducers/counter'

const counterSelector = state => state.counter || initialState

const countSelector = createSelector(
  counterSelector,
  state => state.count,
)

export { counterSelector, countSelector }
