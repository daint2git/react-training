import React from 'react'
import WithMessagePureComponent from './WithMessagePureComponent'

export default class App extends React.Component {
  state = { messages: [] }

  getLastMessage = () => {
    const lastMessage = this.state.messages[this.state.messages.length - 1]
    return lastMessage === undefined ? '' : lastMessage
  }

  onMessageChange = event => {
    const messages = [...this.state.messages]
    messages.push(event.target.value)
    this.setState({ messages })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.getLastMessage()} onChange={this.onMessageChange} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((m, i) => (
          <WithMessagePureComponent key={i} message={m} />
        ))}
      </ul>
    )
  }
}
