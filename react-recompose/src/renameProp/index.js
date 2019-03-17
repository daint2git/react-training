import React from 'react'
import { renameProp } from 'recompose'

const Test = props => <h2>props is {JSON.stringify(props, null, 2)}</h2>

const Example = renameProp('count', 'score')(Test)

export default () => <Example count={1} name="Nguyen Tran Dai" account="daint2" />
