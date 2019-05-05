import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Root from '@components/Root'
import stores from '@stores'
import './i18n'

ReactDOM.render(
  <Provider {...stores}>
    <Root />
  </Provider>,

  document.getElementById('root'),
)
