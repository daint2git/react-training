import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

class RadioButtons extends Component {
  constructor(props) {
    super(props)

    this.state = { cSelected: [] }

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected })
  }

  render() {
    return (
      <div>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick(1)}
            active={this.state.rSelected === 1}
          >
            One
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick(2)}
            active={this.state.rSelected === 2}
          >
            Two
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick(3)}
            active={this.state.rSelected === 3}
          >
            Three
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    )
  }
}

export default RadioButtons
