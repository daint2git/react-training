import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import stepsMiddleware, { steps } from 'redux-effects-steps'
import axios from 'axios'

const fetchDataSuccess = ({ data }) => ({
  type: 'FECTH_DATA',
  payload: data,
})

const fetchData = () => steps(axios.get('http://localhost:9696/accounts'), fetchDataSuccess)

const INITIAL_STATE = () => ({ list: [] })

const reducer = (state = INITIAL_STATE(), action) => {
  const { type, payload } = action
  switch (type) {
    case 'FECTH_DATA':
      return { ...state, list: payload }
    default:
      return state
  }
}

const TestComponent = connect(
  state => ({ list: state.list || [] }),
  dispacth => bindActionCreators({ fetchData }, dispacth),
)(({ list, fetchData }) => (
  <>
    <button onClick={fetchData}>Click for fetch data</button>
    {list.map(element => (
      <div key={element.id}>{element.email}</div>
    ))}
  </>
))

const store = createStore(
  reducer,
  {},
  applyMiddleware(stepsMiddleware, require('kuker-emitters/lib/ReduxEmitter')()),
)

const Root = ({ store }) => (
  <Provider store={store}>
    <TestComponent />
  </Provider>
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
