import React from 'react'

class Input extends React.Component {
  state = { value: '' }

  handleChange = e => this.setState({ value: e.target.value })
  handleReset = () => this.setState({ value: '' })

  render() {
    const { value } = this.state
    const { user, sendMessage } = this.props
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
        <textarea
          rows={4}
          style={{ flexBasis: '90%' }}
          placeholder="Type your message here"
          value={value}
          onChange={this.handleChange}
          onKeyUp={e => {
            if (e.keyCode === 13) {
              sendMessage(user, value)
              this.handleReset()
            }
          }}
        />
        <button
          style={{ flexBasis: '10%' }}
          onClick={() => {
            sendMessage(user, value)
            this.handleReset()
          }}
        >
          Send
        </button>
      </div>
    )
  }
}

export default Input