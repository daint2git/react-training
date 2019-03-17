import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ match }) => (
  <>
    <h2>{match.params.id}</h2>
    <hr />
    <Link to="/">Go Back Home</Link>
  </>
)

export default Post
