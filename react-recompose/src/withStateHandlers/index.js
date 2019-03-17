import React from 'react'
import { withStateHandlers } from 'recompose'

const Presentational = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <h2>Current text: {props.text}</h2>
    <button onClick={props.increaseCount}>increment</button>
    <button onClick={props.decreaseCount}>decrement</button>
    <input type="text" value={props.text} onChange={props.changeText} />
  </div>
)

const Container = withStateHandlers(
  { count: 0, text: '' },
  {
    increaseCount: ({ count }) => () => ({ count: count + 1 }),
    decreaseCount: ({ count }) => () => ({ count: count - 1 }),
    changeText: () => e => ({ text: e.target.value }),
  },
)(Presentational)

export default Container
