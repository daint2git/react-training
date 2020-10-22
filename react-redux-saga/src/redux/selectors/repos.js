import { createSelector } from 'reselect'

import { initialState } from 'redux/reducers/repos'

const reposSelector = state => state.repos || initialState

const reposListSelector = createSelector(
  reposSelector,
  state => state.list,
)

export { reposSelector, reposListSelector }
