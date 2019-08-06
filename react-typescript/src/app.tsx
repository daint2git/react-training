import React from 'react'
import ReactDOM from 'react-dom'

import Hello from 'components/Hello'
import Counter from 'components/Counter'

ReactDOM.render(
  <>
    <Hello compiler="TypeScript" framework="React" bundler="Webpack" />
    <Counter initialCount={1} />
  </>,
  document.getElementById('root'),
)
