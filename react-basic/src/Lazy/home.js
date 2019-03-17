import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <ul>
    <li>
      <Link to="/posts">Posts</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Home
