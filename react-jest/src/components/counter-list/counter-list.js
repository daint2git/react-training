import React from 'react'

import Button from '../button'
import Counter from '../counter'

const createRange = num => Array.from(Array(num).keys())

class CounterList extends React.Component {
  state = { numberCounters: this.props.initialNumberCounters }

  addCounter = () =>
    this.setState(prevState => ({
      numberCounters: prevState.numberCounters + 1,
    }))

  render() {
    const counters = createRange(this.state.numberCounters)
    return (
      <>
        <ul>
          {counters.map(num => (
            <li key={num}>
              <Counter />
            </li>
          ))}
        </ul>
        <Button onClick={this.addCounter}>add Counter</Button>
      </>
    )
  }
}

CounterList.defaultProps = {
  initialNumberCounters: 2,
}

export default CounterList
