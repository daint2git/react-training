import React from 'react'

export default class Form extends React.Component {
  state = { email: '' }

  handleMailChange = e => {
    this.setState({ email: e.target.value })
  }

  handleAdd = e => {
    e.preventDefault()
    this.props.onAdd(this.state.email)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="email"
          value={this.state.value}
          onChange={this.handleMailChange}
        />
        <button onClick={this.handleAdd}>Add</button>
      </form>
    )
  }
}
