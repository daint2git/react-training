import React from 'react'

import Simple from './Simple'
import RenderHijacking from './RenderHijacking'
import OperationOfState from './OperationOfState'

export default () => (
  <>
    <h1>Inheritance Inversion</h1>
    <div style={{ marginLeft: 20 }}>
      <Simple style={{ color: 'red' }} />
      <RenderHijacking isVisibled />
      <RenderHijacking isVisibled={false} />
      <OperationOfState style={{ color: 'blue' }} />
    </div>
  </>
)
