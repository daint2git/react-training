import React from 'react'

class LoginForm extends React.Component {
  state = { value: '' }

  handleChange = e => this.setState({ value: e.target.value })

  render() {
    const { value } = this.state
    const { login } = this.props
    return (
      <div>
        <h1>Login form</h1>
        <div>
          <input
            type="text"
            name="name"
            value={value}
            onChange={this.handleChange}
          />
          <input
            type="button"
            value="Login"
            onClick={() => login(value)}
          />
        </div>
      </div>
    )
  }
}

export default LoginForm