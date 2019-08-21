import { combineReducers } from 'redux'

import * as todos from './todos'

// root state definition
export interface State {
  todos: todos.State
}

// root initialState
export const initialState: State = {
  todos: todos.initialState,
}

// root reducer
export const reducer = combineReducers<State>({
  todos: todos.reducer,
})
