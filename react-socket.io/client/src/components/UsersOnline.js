import React from 'react'

const UserOnline = ({ name }) => <li>{name}</li>

const UsersOnline = ({ list }) => (
  <ul>
    {list && list.map(({ id, ...other }) => <UserOnline key={id} {...other} />)}
  </ul>
)

export default UsersOnline