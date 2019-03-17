import React from 'react'
import { withState } from 'recompose'

const Presentational_1 = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <button onClick={() => props.setCount(props.count + 1)}>increment</button>
    <button onClick={() => props.setCount(props.count - 1)}>decrement</button>
  </div>
)

const Presentational_2 = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <button onClick={() => props.setCount(props.count + 1, () => console.log('increment'))}>
      increment
    </button>
    <button onClick={() => props.setCount(props.count - 1, () => console.log('decrement'))}>
      decrement
    </button>
  </div>
)

const Presentational_3 = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <button
      onClick={() =>
        props.setCount(currentState => currentState + 1, () => console.log('increment'))
      }
    >
      increment
    </button>
    <button
      onClick={() =>
        props.setCount(currentState => currentState - 1, () => console.log('decrement'))
      }
    >
      decrement
    </button>
  </div>
)

const Container = withState('count', 'setCount', 0)(Presentational_1)

export default Container
