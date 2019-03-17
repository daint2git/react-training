import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease, reset } from '../reducers/counter'

const Counter = ({ count, increase, decrease, reset }) => (
  <div>
    <h2>Counter</h2>
    <div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
    <p>{count}</p>
  </div>
)

export default connect(
  state => ({
    count: state.counter.count,
  }),
  { increase, decrease, reset },
)(Counter)
