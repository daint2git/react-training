import { Reducer } from 'redux'
import { handleActions, Action } from 'redux-actions'

import { ActionTypes, Payload, IAddTodoPayload, IToggleTodoPayload } from './actions'
import { ITodoState } from './types'

export const initialState: ITodoState = {
  todos: [],
}

const reducer: Reducer<ITodoState, Action<Payload>> = handleActions<ITodoState, Payload>(
  {
    [ActionTypes.ADD_TODO]: (state: ITodoState, action: Action<IAddTodoPayload>) => {
      const { todo } = action.payload
      return {
        ...state,
        todos: [...state.todos, todo],
      }
    },
    [ActionTypes.TOGGLE_TODO]: (state: ITodoState, action: Action<IToggleTodoPayload>) => {
      const { todoId } = action.payload
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo,
        ),
      }
    },
  },
  initialState,
)

export default reducer
