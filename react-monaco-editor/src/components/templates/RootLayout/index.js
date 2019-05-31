import React from 'react'

import PageLayout from 'components/templates/PageLayout'
import Loading from 'components/molecules/Loading'

const RootLayout = props => (
  <>
    <PageLayout {...props} />
    <Loading />
  </>
)

export default RootLayout
