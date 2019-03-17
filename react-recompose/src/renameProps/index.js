import React from 'react'
import { renameProps } from 'recompose'

const Test = props => <h2>props is {JSON.stringify(props, null, 2)}</h2>

const Example = renameProps({
  count: 'score',
  name: 'fullName',
})(Test)

export default () => <Example count={1} name="Nguyen Tran Dai" account="daint2" />
