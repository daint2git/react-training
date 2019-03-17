import React from 'react'
import { withProps, withStateHandlers } from 'recompose'

const Test = props => {
  console.log('render')
  return <h2>props is {JSON.stringify(props, null, 2)}</h2>
}

const Example1 = withProps({
  count: 'score',
  name: 'fullName',
})(Test)

const Example2 = withProps(props => ({
  count: props.count + 10,
}))(Test)

const Example3 = withProps(props => ({
  countAdd10: props.count + 10,
}))(Test)

const Example4 = withProps(props => {
  console.log('render Example 4')
  return {
    ...props,
    countAdd10: props.count + 10,
  }
})(Test)

const Example5 = withProps(props => {
  console.log('render Example 5')
  return {
    countAdd10: props.count + 10,
  }
})(Test)

const Presentational = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <h2>Current text: {props.text}</h2>
    <button onClick={props.increaseCount}>increment</button>
    <button onClick={props.decreaseCount}>decrement</button>
    <input type="text" value={props.text} onChange={props.changeText} />
    <Example4 {...props} count={props.count} />
    <Example5 {...props} count={props.count} />
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

export default () => (
  <>
    <Example1 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Example2 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Example3 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Container name="Nguyen Tran Dai" account="daint2" />
  </>
)
