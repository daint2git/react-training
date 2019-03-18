import React from 'react'
import { NavLink } from 'react-router-dom'

import UserInfo from './UserInfo'

const activeStyles = {
  color: 'red',
}

const Navbar = () => (
  <nav style={{ display: 'flex' }}>
    <ul style={{ marginRight: '50px' }}>
      <li>
        <NavLink to="/" exact activeStyle={activeStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" activeStyle={activeStyles}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeStyles}>
          About
        </NavLink>
      </li>
    </ul>
    <UserInfo />
  </nav>
)

export default Navbar
