import React from 'react'
import ReactDOM from 'react-dom'
import Lazy from './Lazy'

const Root = () => (
  <>
    <Lazy />
  </>
)

ReactDOM.render(<Root />, document.getElementById('root'))
