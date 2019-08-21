import Todo from 'models/Todo'
import { Action, ActionTypes } from 'actions/todos'

// state definition
export interface State {
  todos: Todo[]
}

// initialState
export const initialState: State = {
  todos: [],
}

/**
 * reducer
 */
export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const { todo } = action.payload
      return {
        ...state,
        todos: [...state.todos, todo],
      }
    }
    case ActionTypes.TOGGLE_TODO: {
      const { todoId } = action.payload
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo,
        ),
      }
    }
    default:
      return state
  }
}
