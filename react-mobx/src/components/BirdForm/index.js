import React from 'react'
import { observer } from 'mobx-react'

const INITIAL_STATE = () => ({
  bird: {
    name: '',
    color: 'black',
  },
})

@observer
class BirdForm extends React.Component {
  state = INITIAL_STATE()

  handleInputChange = e => {
    e.persist()
    this.setState(prevState => ({
      bird: {
        ...prevState.bird,
        [e.target.name]: e.target.value,
      },
    }))
  }

  handleSubmit = () => {
    const { addBird } = this.props
    const { bird } = this.state
    addBird(bird)
    this.setState(INITIAL_STATE())
  }

  render() {
    const { bird } = this.state
    return (
      <div>
        <input type="text" name="name" value={bird.name} onChange={this.handleInputChange} />
        <br />
        <input type="text" name="color" value={bird.color} onChange={this.handleInputChange} />
        <br />
        <button onClick={this.handleSubmit}>Add Bird</button>
      </div>
    )
  }
}

export default BirdForm
