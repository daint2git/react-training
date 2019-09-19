import React from 'react'
import { connect } from 'react-redux'

import { increment, incrementAsync, decrement } from 'redux/reducers/counter'

const Counter = ({ count, onIncrement, onIncrementAsync, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      +
    </button>
    <button type="button" onClick={onIncrementAsync}>
      + (with async)
    </button>
    <button type="button" onClick={onDecrement}>
      -
    </button>
    <p>{count}</p>
  </div>
)

export default connect(
  state => ({ count: state.counter.count }),
  {
    onIncrement: increment,
    onIncrementAsync: incrementAsync,
    onDecrement: decrement,
  },
)(Counter)
