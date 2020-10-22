import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import reducer, { increment, incrementAsync, decrement } from 'redux/reducers/counter'
import saga from 'redux/sagas/counter'
import useInjectReducer from 'redux/injectReducer'
import useInjectSaga from 'redux/injectSaga'

const key = 'counter'

const CounterPage = () => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })
  // const count = useSelector(state => state.counter.count)
  // const dispatch = useDispatch()

  // const handleIncrement = () => {
  //   dispatch(increment())
  // }

  // const handleIncrementAsync = () => {
  //   dispatch(incrementAsync())
  // }

  // const handleDecrement = () => {
  //   dispatch(decrement())
  // }

  console.log('render CounterPage')

  return (
    <div>
      {/* <button type="button" onClick={handleIncrement}>
        +
      </button>
      <button type="button" onClick={handleIncrementAsync}>
        + (with async)
      </button>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <p>{count}</p> */}
    </div>
  )
}

export default CounterPage
