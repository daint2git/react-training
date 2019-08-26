import { combineReducers } from 'redux'

import { Action as TodosAction } from 'actions/todos'

import {
  State as TodosState,
  initialState as TodosInitialState,
  reducer as TodosReducer,
} from './todos'

// root state definition
export interface State {
  todos: TodosState
}

// root initialState
export const initialState: State = {
  todos: TodosInitialState,
}

type Action = TodosAction

// root reducer
export const reducer = combineReducers<State, Action>({
  todos: TodosReducer,
})
