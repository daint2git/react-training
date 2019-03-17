import React from 'react'
import { defaultProps } from 'recompose'

const Test = props => <h2>props is {JSON.stringify(props, null, 2)}</h2>

const Example1 = defaultProps({
  name: 'fullName',
  account: 'account1',
})(Test)

const Example2 = defaultProps({
  score: 100,
  gender: 'male',
})(Test)

export default () => (
  <>
    <Example1 count={1} name="Nguyen Tran Dai" account="daint2" />
    <Example2 count={1} name="Nguyen Tran Dai" account="daint2" />
  </>
)
