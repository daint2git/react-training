import React from "react"
import { Link } from "gatsby"
import "./menu.css"

export default function Menu() {
  return (
    <header>
      <h3 className="nav-brand">
        <Link to={`/`}>Gatsby Blog Demo</Link>
      </h3>
      <ul>
        <li className="nav-item">
          <Link to={`/page-2/`}>Page 2</Link>
        </li>
        <li className="nav-item">
          <Link to={`/about/`}>About</Link>
        </li>
        <li className="nav-item">
          <Link to={`/posts`}>Posts</Link>
        </li>
        <li className="nav-item">
          <Link to={`/`}>Trang chủ</Link>
        </li>
      </ul>
    </header>
  )
}
