import React from 'react'

const Message = ({ userName, content, createdAt }) => (
  <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
    <div>{userName}</div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>{content}</div>
      <div>{createdAt}</div>
    </div>
  </div>
)

const Messages = ({ list }) => (
  <div style={{ border: '2px solid green' }}>
    {list && list.map(({ id, ...other }) => <Message key={id} {...other} />)}
  </div>
)

export default Messages