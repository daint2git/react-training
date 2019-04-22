import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.main`
  flex: 1;
`

function AppMain({ children }) {
  return <Main>{children}</Main>
}

AppMain.propTypes = {
  children: PropTypes.node,
}

export default AppMain
