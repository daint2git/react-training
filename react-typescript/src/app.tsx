import React from 'react'
import ReactDOM from 'react-dom'

import Hello from 'components/Hello'
import Counter from 'components/Counter'
import Counter2 from 'components/Counter2'
import Warning from 'components/Warning'
import Error from 'components/Error'

ReactDOM.render(
  <>
    <Hello compiler="TypeScript" framework="React" bundler="Webpack" />
    <Counter initialCount={1} />
    <Counter2 initialCount={1} />
    <Warning message="This is warning" />
    <Error message="This is error" />
  </>,
  document.getElementById('root'),
)
