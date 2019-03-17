import React from 'react'
import { branch, renderComponent, withStateHandlers } from 'recompose'

const ATest = props => <h2>component is A and props is {JSON.stringify(props, null, 2)}</h2>

const BTest = props => <h2>component is B and props is {JSON.stringify(props, null, 2)}</h2>

const Example = branch(props => props.count % 2 === 0, renderComponent(ATest))(BTest)

const Presentational = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <h2>Current text: {props.text}</h2>
    <button onClick={props.increaseCount}>increment</button>
    <button onClick={props.decreaseCount}>decrement</button>
    <input type="text" value={props.text} onChange={props.changeText} />
    <Example count={props.count} text={props.text} />
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
