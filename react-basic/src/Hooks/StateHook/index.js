import React, { Component, useState } from 'react'

class ClassExample extends Component {
  state = { ...this.props }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <div>
          <p>
            FullName is <span style={{ color: 'red' }}>{this.state.fullName}</span>
          </p>
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>
            Age is <span style={{ color: 'red' }}>{this.state.age}</span>
          </p>
          <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
        </div>
      </>
    )
  }
}

const FunctionExample = ({ title, fullName: initialFullName, age: initialAge }) => {
  const fullName = useFormInput(initialFullName)
  const age = useFormInput(initialAge)
  return (
    <>
      <h3>{title}</h3>
      <div>
        <p>
          FullName is <span style={{ color: 'red' }}>{fullName.value}</span>
        </p>
        <input type="text" name="fullName" {...fullName} />
      </div>
      <div>
        <p>
          Age is <span style={{ color: 'red' }}>{age.value}</span>
        </p>
        <input type="text" name="age" {...age} />
      </div>
    </>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: e => setValue(e.target.value),
  }
}

const StateHook = () => {
  const newProps = { fullName: 'daint2', age: 18 }
  return (
    <>
      <h1>Hooks → State Hook → useState</h1>
      <div style={{ paddingLeft: 25 }}>
        <ClassExample title="ClassExample" {...newProps} />
        <FunctionExample title="FunctionExample" {...newProps} />
      </div>
      <hr />
    </>
  )
}

export default StateHook
