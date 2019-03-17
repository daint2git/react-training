import React from 'react'

import UsersOnline from './UsersOnline'
import Messages from './Messages'
import Input from './Input'

const ChatRoom = ({ usersOnline, user, messages, sendMessage }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ flexBasis: '20%' }}>
      <UsersOnline list={usersOnline} />
    </div>
    <div style={{ flexBasis: '70%' }}>
      <Messages user={user} list={messages} />
      <Input user={user} sendMessage={sendMessage} />
    </div>
  </div>
)

export default ChatRoom