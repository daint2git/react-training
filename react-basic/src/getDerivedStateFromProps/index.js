import React from 'react'
import { withStateHandlers } from 'recompose'

class Inner extends React.Component {
  state = {
    innerValue: this.props.outerValue,
  }

  // componentWillReceiveProps(nexProps) {
  //   console.log('componentWillReceiveProps')
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('props', JSON.stringify(props, null, 2))
    console.log('state', JSON.stringify(state, null, 2))
    if (props.outerValue !== state.prevOuterValue) {
      return {
        innerValue: props.outerValue,
        prevOuterValue: props.outerValue,
      }
    }
    return null
  }

  onChange = e => this.setState({ innerValue: e.target.value })

  render() {
    return (
      <div>
        <h2>Inner</h2>
        <p>innerValue is {this.state.innerValue}</p>
        <input name="inner" type="text" value={this.state.innerValue} onChange={this.onChange} />
      </div>
    )
  }
}

const Outer = withStateHandlers(
  {
    value: '',
    otherValue: '',
  },
  {
    onValueChange: () => e => ({ value: e.target.value }),
    onOtherValueChange: () => e => ({ otherValue: e.target.value }),
  },
)(({ value, onValueChange, otherValue, onOtherValueChange }) => (
  <div>
    <h2>Outer</h2>
    <p>value is {value}</p>
    <input name="value" type="text" value={value} onChange={onValueChange} />
    <br />
    <p>otherValue is {otherValue}</p>
    <input name="otherValue" type="text" value={otherValue} onChange={onOtherValueChange} />
    <Inner outerValue={value} outerOtherValue={otherValue} />
  </div>
))

export default Outer
