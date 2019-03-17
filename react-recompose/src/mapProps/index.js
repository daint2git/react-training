import React from 'react'
import { mapProps } from 'recompose'

const Test = props => <h2>props is {JSON.stringify(props, null, 2)}</h2>

const Example1 = mapProps(props => ({
  name: 'fullName',
  account: 'account1',
}))(Test)

const Example2 = mapProps(props => ({
  ...props,
  name: 'fullName',
  account: 'account1',
}))(Test)

const Example3 = mapProps(props => ({
  score: 100,
  gender: 'male',
}))(Test)

const Example4 = mapProps(props => ({
  ...props,
  score: 100,
  gender: 'male',
}))(Test)

export default () => (
  <>
    <Example1 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Example2 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Example3 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Example4 count={1} name="Nguyen Tran Dai" account="daint2" />
  </>
)
