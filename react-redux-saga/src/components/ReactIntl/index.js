import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'

import FormattedMessage from './FormattedMessage'
import FormattedDate from './FormattedDate'
import RouteApp from './Routes/App'

const ReactIntl = () => (
  <IntlProvider locale="en" timeZone="Asia/Tokyo">
    <BrowserRouter>
      <Fragment>
        <FormattedMessage />
        <FormattedDate />
        <RouteApp />
      </Fragment>
    </BrowserRouter>
  </IntlProvider>
)

export default ReactIntl
