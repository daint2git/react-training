import React from 'react'

class Counter extends React.Component {
  state = { count: 0 }

  setCount = value => this.setState(prevState => ({ count: prevState.count + value }))

  render() {
    return (
      <div className="counter">
        <p>Current count: {this.state.count}</p>
        <button name="increment" onClick={() => this.setCount(1)}>
          increment
        </button>
        <button name="decrement" onClick={() => this.setCount(-1)}>
          decrement
        </button>
      </div>
    )
  }
}

export default Counter
