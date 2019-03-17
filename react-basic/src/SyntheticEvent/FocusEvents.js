import React from 'react'

class FocusEvents extends React.Component {
  handleFocus = () => console.log('focus')
  handleBlur = () => console.log('blur')
  handeClick = () => console.log('click')

  render() {
    return (
      <textarea
        style={{ height: 100, backgroundColor: 'red' }}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onClick={this.handeClick}
      />
    )
  }
}

export default FocusEvents
