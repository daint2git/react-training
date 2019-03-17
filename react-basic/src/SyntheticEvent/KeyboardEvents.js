import React from 'react'

class KeyboardEvents extends React.Component {
  handleKeyDown = () => console.log('KeyDown')
  handleKeyPress = () => console.log('KeyPress')
  handleKeyUp = () => console.log('KeyUp')

  render() {
    return (
      <textarea
        style={{ height: 100, backgroundColor: 'red' }}
        onKeyDown={this.handleKeyDown}
        onKeyPress={this.handleKeyPress}
        onKeyUp={this.handleKeyUp}
      />
    )
  }
}

export default KeyboardEvents
