import React from 'react'
import { Link, Route, NavLink } from 'react-router-dom'
import { BLOG_POSTS } from './constants'

const Post = ({ match }) => (
  <div>
    <h3>Post</h3>
    <pre>{JSON.stringify(match, null, 2)}</pre>
  </div>
)

const Posts = ({ match }) => (
  <>
    <pre>{JSON.stringify(match, null, 2)}</pre>
    <ul>
      {BLOG_POSTS.map(post => (
        <li key={post.id}>
          <NavLink
            to={`${match.url}/${post.id}`}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            {post.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <hr />
    <Link to="/">Go Back Home</Link>
    <Route path={`${match.path}/:id`} component={Post} />
  </>
)

export default Posts
