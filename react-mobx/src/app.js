import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Root from '@components/Root'
import stores from '@stores'

ReactDOM.render(
  <Provider {...stores}>
    <Root />
  </Provider>,

  document.getElementById('root'),
)
