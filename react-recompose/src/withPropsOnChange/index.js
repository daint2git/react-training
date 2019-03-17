import React from 'react'
import { withPropsOnChange, withStateHandlers } from 'recompose'

const Test = props => {
  console.log('render')
  return <h2>props is {JSON.stringify(props, null, 2)}</h2>
}

const Example1 = withPropsOnChange(['count'], props => {
  console.log('Example1')
  return { ...props }
})(Test)

const Example2 = withPropsOnChange(['count'], props => {
  console.log('Example2')
  return { newProps: props }
})(Test)

const Example3 = withPropsOnChange(
  (props, nextProps) => props.count !== nextProps.count,
  props => {
    console.log('Example3')
    return { ...props }
  },
)(Test)

const Presentational = props => (
  <div>
    <h2>Current count: {props.count}</h2>
    <h2>Current text: {props.text}</h2>
    <button onClick={props.increaseCount}>increment</button>
    <button onClick={props.decreaseCount}>decrement</button>
    <input type="text" value={props.text} onChange={props.changeText} />
    <Example3 count={props.count} text={props.text} />
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
