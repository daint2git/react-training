import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 200px;
  height: 100vh;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  background-color: rgb(239, 239, 239);
`

const List = styled.ul`
  margin: 0;
  list-style: none;
  height: 100%;
`

function AppNavBar({ data }) {
  return (
    <Nav>
      <List>
        {data.map(child => (
          <li key={child.url}>
            <a href={child.url}>{child.children}</a>
          </li>
        ))}
      </List>
    </Nav>
  )
}

AppNavBar.defaultProps = {
  data: [],
}

AppNavBar.propTypes = {
  data: PropTypes.array,
}

export default AppNavBar
