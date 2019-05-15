import React from 'react'
import { connect } from 'react-redux'

import { increment } from 'redux/reducers/counterReducer'

class Counter extends React.Component {
  componentDidMount() {
    const { increment } = this.props
    this.timer = setInterval(() => {
      increment()
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { count } = this.props
    console.log('render Counter')

    return (
      <div>
        <h3>Count: {count}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({ count: state.counterReducer.count })
const mapDispatchToProps = { increment }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
