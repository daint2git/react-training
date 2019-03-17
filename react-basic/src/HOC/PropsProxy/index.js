import React from 'react'

import Simple from './Simple'
import PropOperation from './PropOperation'
import AccessToInstancesViaReference from './AccessToInstancesViaReference'
import AbstractionOfState from './AbstractionOfState'
import WrapAWrappedComponentWithAnotherElement from './WrapAWrappedComponentWithAnotherElement'

export default () => (
  <>
    <h1>Props Proxy</h1>
    <div style={{ marginLeft: 20 }}>
      <Simple style={{ color: 'red' }} />
      <PropOperation style={{ color: 'blue' }} />
      <AccessToInstancesViaReference style={{ color: 'green' }} />
      <AbstractionOfState />
      <WrapAWrappedComponentWithAnotherElement />
    </div>
  </>
)
