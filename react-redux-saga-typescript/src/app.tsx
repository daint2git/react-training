import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import TodoPage from './TodoPage'

ReactDOM.render(<TodoPage message="hello" />, document.getElementById('app'))
