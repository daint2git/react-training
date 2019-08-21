import Todo from 'models/Todo'

/**
 * ActionTypes
 */
export enum ActionTypes {
  ADD_TODO = 'TODOS/ADD_TODO',
  TOGGLE_TODO = 'TODOS/TOGGLE_TODO',
}

/**
 * Actions interfaces
 */
export interface AddTodoAction {
  type: ActionTypes.ADD_TODO
  payload: {
    todo: Todo
  }
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO
  payload: { todoId: number }
}

/**
 * Action creators
 */
export function addTodo(name: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: Date.now(),
        name,
        isDone: false,
      },
    },
  }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: {
      todoId,
    },
  }
}

/**
 * Action type
 */
export type Action = AddTodoAction | ToggleTodoAction
