import React from 'react'

class App extends React.Component {
  state = {
    text: '',
    messages: [],
  }

  handleTextChange = e =>
    this.setState({
      text: e.target.value,
    })

  handleMessagesAdd = e => {
    if (e.keyCode === 13) {
      e.persist()
      this.setState(prevState => ({
        text: '',
        messages: [
          ...prevState.messages,
          {
            id: prevState.messages.length + 1,
            content: e.target.value,
          },
        ],
      }))
    }
  }

  handleMessagesUpdate = () =>
    this.setState({
      messages: [...this.state.messages],
    })

  // handleMessagesUpdate = e => {
  //   const newMessages = this.state.messages
  //   newMessages[0].content = e.target.value
  //   this.setState({
  //     messages: newMessages,
  //   })
  // }

  // handleMessagesUpdate = e => {
  //   const newMessages = this.state.messages
  //   console.log(newMessages)
  //   newMessages[0].content = e.target.value
  //   // this.setState({
  //   //   messages: [],
  //   // })
  // }

  render() {
    console.log('renderApp')
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
          onKeyDown={this.handleMessagesAdd}
        />
        <input type="button" value="click" onClick={this.handleMessagesUpdate} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

class MessageList extends React.PureComponent {
  render() {
    console.log('render MessageList')
    return (
      <ul>
        {this.props.messages.map(message => (
          <Message key={message.id} message={message.content} />
        ))}
      </ul>
    )
  }
}

class Message extends React.PureComponent {
  render() {
    console.log('render Message')
    return <li>{this.props.message}</li>
  }
}

export default App
