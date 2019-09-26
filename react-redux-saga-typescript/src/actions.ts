import { createAction } from 'redux-actions'

import { ITodo } from './types'

/**
 * ActionTypes
 */
export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface IAddTodoPayload {
  todo: ITodo
}

export interface IToggleTodoPayload {
  todoId: number
}

export type Payload = IAddTodoPayload | IToggleTodoPayload

export const addTodo = createAction<IAddTodoPayload>(ActionTypes.ADD_TODO)
export const toggleTodo = (id: number) =>
  createAction<IToggleTodoPayload>(ActionTypes.TOGGLE_TODO)({ todoId: id })
