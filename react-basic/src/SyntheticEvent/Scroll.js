import React from 'react'

class Scroll extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => console.log(`x: ${window.pageXOffset}, y: ${window.pageYOffset}`)

  render() {
    return (
      <div style={{ backgroundColor: 'aqua' }} onScroll={this.handleScroll}>
        <div style={{ height: '100vh' }}>abc</div>
        <div style={{ height: '100vh' }}>abc</div>
        <div style={{ height: '100vh' }}>abc</div>
      </div>
    )
  }
}

export default Scroll
