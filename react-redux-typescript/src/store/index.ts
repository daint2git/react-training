import { createStore } from 'redux'

import { State, reducer } from 'reducers'
import { Action } from 'actions/todos'

const store = createStore<State, Action, any, any>(reducer)

export default store
