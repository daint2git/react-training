import React from 'react'
import { connect } from 'react-redux'

import { incrementCount, decrementCount, resetCount } from '../../redux/reducers/counter5'

import Button from '../Button'
import styles from './styles.scss'

const Counter = ({ count, increase, decrease, reset }) => {
  console.log('render', count)
  return (
    <div className={styles.root}>
      <h2>Counter</h2>
      <Button onClick={increase}>Increment</Button>
      <Button type="secondary" style={{ marginLeft: '10px' }} onClick={decrease}>
        Decrement
      </Button>
      <Button type="danger" style={{ marginLeft: '10px' }} onClick={reset}>
        Reset
      </Button>
      <p>{count}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.counter5.count,
})

const mapDispatchToProps = {
  increase: incrementCount,
  decrease: decrementCount,
  reset: resetCount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
