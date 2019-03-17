import React from 'react'
import ReactDOM from 'react-dom'
import WithState from './withState'

const Root = () => (
  <>
    <WithState />
  </>
)

ReactDOM.render(<Root />, document.getElementById('root'))
