import { createSelector } from 'reselect'

import { initialState } from '../reducers/repos'

const reposSelector = state => state.repos || initialState

const listSelector = () =>
  createSelector(
    reposSelector,
    state => state.list,
  )

export { reposSelector, listSelector }
