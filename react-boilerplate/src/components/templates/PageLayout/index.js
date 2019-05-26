import React from 'react'
import Proptypes from 'prop-types'

import Navbar from 'components/molecules/Navbar'
import Main from 'components/molecules/Main'

const PageLayout = ({ children }) => (
  <div>
    <Navbar />
    <Main>{children}</Main>
  </div>
)

PageLayout.propTypes = {
  children: Proptypes.node,
}

export default PageLayout
