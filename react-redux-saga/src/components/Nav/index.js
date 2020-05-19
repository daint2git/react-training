import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/repo">repo</Link>
      </li>
      <li>
        <Link to="counter">counter</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
