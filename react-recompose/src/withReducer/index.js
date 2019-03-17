import React from 'react'
import { withReducer } from 'recompose'

const INC = 'action/inc'
const DEC = 'action/dec'

const incAction = { type: INC }
const decAction = { type: DEC }

const Presentational = props => (
  <div>
    <h2>Current count: {props.state.count}</h2>
    <button onClick={() => props.countDispatch(incAction)}>increment</button>
    <button onClick={() => props.countDispatch(decAction)}>decrement</button>
  </div>
)

const reducer = (state, action) => {
  const { type } = action
  switch (type) {
    case INC:
      return { ...state, count: state.count + 1 }
    case DEC:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const Container = withReducer('state', 'countDispatch', reducer, {
  count: 0,
})(Presentational)

export default Container
