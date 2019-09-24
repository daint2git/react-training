import React from 'react'
import { connect } from 'react-redux'

import { useInjectReducer } from 'redux/utils/injectReducer'
import { useInjectSaga } from 'redux/utils/injectSaga'
import reducer, { increment, incrementAsync, decrement } from 'redux/reducers/counter'
import { countSelector } from 'redux/selectors/counter'
import saga from 'redux/sagas/counter'

const CONTEXT = 'counter'

const Counter = ({ count, onIncrement, onIncrementAsync, onDecrement }) => {
  useInjectReducer({ key: CONTEXT, reducer })
  useInjectSaga({ key: CONTEXT, saga })
  return (
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
}

export default connect(
  state => ({ count: countSelector(state) }),
  {
    onIncrement: increment,
    onIncrementAsync: incrementAsync,
    onDecrement: decrement,
  },
)(Counter)
