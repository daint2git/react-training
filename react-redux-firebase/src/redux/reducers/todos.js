import firebase from 'configs/firebase'

export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL'

export const fetchTodos = () => async dispatch => {
  // firebase.todos().on('value', snapshot => {
  firebase.todos().once('value', snapshot => {
    const result = snapshot.val()

    const payload = Object.keys(result).map(key => result[key])

    if (result) {
      dispatch({
        type: FETCH_TODOS,
        payload,
      })
    }
  })
}

export const createTodo = todo => async () => {
  const id = Date.now()
  const finished = false
  // firebase.todos()
  //   .push()
  //   .set({ id, ...todo })
  firebase.database.ref(`todos/${id}`).set({ id, ...todo, finished })
}

export const updateTodo = id => async () => {
  firebase
    .todos()
    .child(id)
    .remove()
}

const initialState = {
  list: [],
}

const repos = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_TODOS:
      return { ...state, list: payload || [] }
    default:
      return state
  }
}

export default repos
