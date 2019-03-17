import React from 'react'

class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = e => this.setState({ x: e.clientX, y: e.clientY })

  render() {
    return (
      <div style={{ height: 250, backgroundColor: 'yellow' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

const WithRender = () => (
  <>
    <p>With render</p>
    <Mouse
      render={props => (
        <>
          <p>{`x : ${props.x}`}</p>
          <p>{`y : ${props.y}`}</p>
        </>
      )}
    />
  </>
)

export default WithRender
