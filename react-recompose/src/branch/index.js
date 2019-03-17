import React from 'react'
import { compose, branch, defaultProps, renderComponent } from 'recompose'

const ATest = props => <h2>component is A and props is {JSON.stringify(props, null, 2)}</h2>

const BTest = props => <h2>component is B and props is {JSON.stringify(props, null, 2)}</h2>

const Example1 = compose(
  defaultProps({ count: 1 }),
  branch(props => props.count === 1, renderComponent(ATest)),
)(BTest)

const Example2 = compose(
  defaultProps({ count: 1 }),
  branch(props => props.count !== 1, renderComponent(ATest)),
)(BTest)

const CTest = props => <h2>component is C and props is {JSON.stringify(props, null, 2)}</h2>

const Example3 = compose(
  defaultProps({ count: 1 }),
  branch(
    props => props.count === 1,
    defaultProps({ list: [1, 2, 3] }),
    defaultProps({ list: [3, 4, 5] }),
  ),
)(CTest)

const Example4 = compose(
  defaultProps({ count: 1 }),
  branch(
    props => props.count !== 1,
    defaultProps({ list: [1, 2, 3] }),
    defaultProps({ list: [3, 4, 5] }),
  ),
)(CTest)

export default () => (
  <>
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
  </>
)
