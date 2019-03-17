import React from 'react'

class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = e => this.setState({ x: e.clientX, y: e.clientY })

  render() {
    return (
      <div style={{ height: 250, backgroundColor: 'red' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

const WithChildren = () => (
  <>
    <p>With children</p>
    <Mouse>
      {props => (
        <>
          <p>{`x : ${props.x}`}</p>
          <p>{`y : ${props.y}`}</p>
        </>
      )}
    </Mouse>
  </>
)

export default WithChildren
