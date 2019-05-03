import React from 'react'
import { inject, observer } from 'mobx-react'
import BirdList from '@components/BirdList'

const INITIAL_STATE = () => ({
  bird: {
    name: '',
    color: 'black',
  },
})

@inject('BirdStore')
@observer
class BirdView extends React.Component {
  state = INITIAL_STATE()

  handleChange = e => {
    e.persist()
    this.setState(prevState => ({
      bird: {
        ...prevState.bird,
        [e.target.name]: e.target.value,
      },
    }))
  }

  handleSubmit = () => {
    const {
      BirdStore: { addBird },
    } = this.props
    const { bird } = this.state
    addBird(bird)
    this.setState(INITIAL_STATE())
  }

  render() {
    const { bird } = this.state
    const {
      BirdStore: { birds, birdCount },
    } = this.props

    return (
      <div>
        <h2>Birds</h2>
        <div>
          <input type="text" name="name" value={bird.name} onChange={this.handleChange} />
          <br />
          <input type="text" name="color" value={bird.color} onChange={this.handleChange} />
          <br />
          <button onClick={this.handleSubmit}>Add Bird</button>
        </div>
        <BirdList birds={birds} birdCount={birdCount} />
      </div>
    )
  }
}

export default BirdView
