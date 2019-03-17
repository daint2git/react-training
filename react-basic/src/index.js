import React from 'react'
import ReactDOM from 'react-dom'
import Example1 from './PureComponent/Example1'

const Root = () => (
  <>
    <Example1 />
  </>
)

ReactDOM.render(<Root />, document.getElementById('root'))
