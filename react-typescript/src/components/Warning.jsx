import React from 'react'

import Hello from 'components/Hello'

const Warning = ({ message }) => (
  <>
    <p style={{ color: 'orange' }}>{message}</p>
    <Hello compiler="TypeScript" framework="React" bundler="Webpack" />
  </>
)

export default Warning
