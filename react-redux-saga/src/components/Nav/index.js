import React from 'react'
import { Link } from 'react-router-dom'

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
