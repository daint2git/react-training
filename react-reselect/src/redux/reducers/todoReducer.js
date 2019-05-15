const getLocalStorage = key => JSON.parse(localStorage.getItem(key))
const setLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data))

const initialState = {
  todos: [],
  conditions: {
    finished: true,
    unfinished: true,
  },
}

const actionTypes = {
  READ_TODOS: 'READ_TODOS',
  CREATE_TODO: 'CREATE_TODO',
  UPDATE_STATUS: 'UPDATE_STATUS',
}

export const readTodos = conditions => ({
  type: actionTypes.READ_TODOS,
  payload: {
    conditions,
  },
})

export const createTodo = payload => ({
  type: actionTypes.CREATE_TODO,
  payload,
})

export const updateStatus = id => ({
  type: actionTypes.UPDATE_STATUS,
  payload: {
    id,
  },
})

const filterTodos = (todos, conditions) => {
  const { finished, unfinished } = conditions
  const newTodos = todos.filter(todo => finished === todo.finished || unfinished === !todo.finished)
  return newTodos
}

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.READ_TODOS: {
      const todos = getLocalStorage('TODOS')
      const { conditions } = payload

      if (conditions) {
        return {
          ...state,
          todos: filterTodos(todos, conditions),
          conditions,
        }
      }

      return {
        ...state,
        todos,
      }
    }

    case actionTypes.CREATE_TODO: {
      const newTodo = {
        id: Date.now(),
        finished: false,
        ...payload,
      }
      const todos = getLocalStorage('TODOS')
      const newTodos = [...todos, newTodo]

      setLocalStorage('TODOS', newTodos)

      return {
        ...state,
        todos: filterTodos(newTodos, state.conditions),
      }
    }

    case actionTypes.UPDATE_STATUS: {
      const todos = getLocalStorage('TODOS')
      const newTodos = todos.map(todo =>
        todo.id === payload.id
          ? {
              ...todo,
              finished: !todo.finished,
            }
          : todo,
      )

      setLocalStorage('TODOS', newTodos)

      return {
        ...state,
        todos: filterTodos(newTodos, state.conditions),
      }
    }

    default:
      return state
  }
}

export default todoReducer
