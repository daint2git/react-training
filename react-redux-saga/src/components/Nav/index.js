import React from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">root</Link>
      </li>
      <li>
        <Link to="/repos">repos</Link>
      </li>
      <li>
        <Link to="/counter">counter</Link>
      </li>
    </ul>
  )
}
=======
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
>>>>>>> 9e07edacd769f39f4987a7395c839ab434c6400a
