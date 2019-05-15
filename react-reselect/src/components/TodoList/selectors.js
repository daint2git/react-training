import { createSelector } from 'reselect'

const todoReducerSelector = state => state.todoReducer

export const todosSelector = createSelector(
  todoReducerSelector,
  state => state.todos,
)

export const conditionsSelector = createSelector(
  todoReducerSelector,
  state => state.conditions,
)
