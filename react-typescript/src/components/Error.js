import React from 'react'

import Hello from 'components/Hello'

const Error = ({ message }) => (
  <>
    <p style={{ color: 'red' }}>{message}</p>
    <Hello compiler="TypeScript" framework="React" bundler="Webpack" />
  </>
)

export default Error
