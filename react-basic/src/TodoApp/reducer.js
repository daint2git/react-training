const GET_TODOS = 'GET_TODOS'
const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'

export const getTodos = condition => ({
  type: GET_TODOS,
  payload: condition,
})

export const addTodo = value => ({
  type: ADD_TODO,
  payload: value,
})

export const updateTodo = id => ({
  type: UPDATE_TODO,
  payload: id,
})

const INITIAL_STATE = () => ({
  list: JSON.parse(localStorage.getItem('TODOS')) || [],
})

const setLocalStorage = data => localStorage.setItem('TODOS', JSON.stringify(data))

const reducer = (state = INITIAL_STATE(), action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TODOS:
      if (payload === 'All') return state
      if (payload === 'Active') return { list: state.list.filter(todo => todo.active) }
      if (payload === 'Completed') return { list: state.list.filter(todo => !todo.active) }
      return state

    case ADD_TODO:
      let nextId = 1
      if (state.list.length > 0) nextId = state.list[state.list.length - 1].id + 1
      const newTodo = {
        id: nextId,
        value: payload,
        active: true,
      }
      const newList = [...list, newTodo]
      setLocalStorage(newList)
      return { list: newList }

    case UPDATE_TODO:
      const newList = state.list.reduce((result, todo) => {
        return todo.id === payload
          ? [...result, { ...todo, active: !todo.active }]
          : [...result, todo]
      }, [])
      setLocalStorage(newList)
      return { list: newList }

    default:
      return state
  }
}

export default reducer
