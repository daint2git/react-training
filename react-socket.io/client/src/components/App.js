import React from 'react'
import io from 'socket.io-client'

import ChatRoom from './ChatRoom'
import LoginForm from './LoginForm'

class App extends React.Component {
  state = {
    user: { id: '', name: '' },
    usersOnline: [],
    messages: []
  }
  socket = null

  componentDidMount() {
    // connect server node, thông qua socket.io
    this.socket = io('localhost:6969')

    this.socket.on('loginSuccess', res => this.setUser(res))
    this.socket.on('loginFaill', () => alert('Login fail'))

    // update lại danh sách người dùng online khi có người đăng nhập hoặc đăng xuất
    this.socket.on('updateUsersOnline', res => this.setUsersOnline(res))

    // lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
    this.socket.on('newMessage', res => this.receiveMessage(res))
  }

  setUser = res => this.setState({ user: res })

  setUsersOnline = res => this.setState({ usersOnline: res })

  receiveMessage = message =>
    this.setState(prevState => ({ messages: [ ...prevState.messages, message ] }))

  sendMessage = (user, value) => {
    const current = new Date()
    const hours = current.getHours().toString().padStart(2, '0')
    const minutes = current.getMinutes().toString().padStart(2, '0')
    const newMessage = {
      id: Math.random(),
      userId: user.id,
      userName: user.name,
      content: value,
      createdAt: `${hours} : ${minutes}`
    }
    this.socket.emit('newMessage', newMessage)
  }

  login = name => this.socket.emit('login', name)

  render() {
    const { usersOnline, user, messages } = this.state
    return (
      <div>
        <h1>Chat box</h1>
        {
          user.id && user.name
          ? <ChatRoom
                usersOnline={usersOnline}
                user={user}
                messages={messages}
                sendMessage={this.sendMessage}
              />
          : <LoginForm login={this.login} />
        }
      </div>
    )
  }
}

export default App