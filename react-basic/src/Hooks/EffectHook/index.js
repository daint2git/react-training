import React, { Component, useState, useEffect } from 'react'

class ClassExample extends Component {
  state = {
    fullName: this.props.fullName,
    height: window.innerHeight,
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleResize = () => this.setState({ height: window.innerHeight })

  componentDidMount() {
    document.title = `This is ${this.state.fullName}`
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    document.title = `This is ${this.state.fullName}`
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

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
        <p>{`Height is ${this.state.height}`}</p>
      </>
    )
  }
}

const FunctionExample = ({ title, fullName: initialFullName }) => {
  const fullName = useFormInput(initialFullName)
  const height = useWindowHeight()

  useDocumentTitle(fullName.value)

  return (
    <>
      <h3>{title}</h3>
      <div>
        <p>
          FullName is <span style={{ color: 'red' }}>{fullName.value}</span>
        </p>
        <input type="text" name="fullName" {...fullName} />
      </div>
      <p>{`Height is ${height}`}</p>
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

const useDocumentTitle = tittle => {
  useEffect(() => {
    document.title = `This is ${tittle}`
  })
}

const useWindowHeight = () => {
  const [height, setHeight] = useState(window.innerHeight)
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return height
}

const EffectHook = () => {
  const newProps = { fullName: 'daint2' }
  return (
    <>
      <h1>Hooks → Effect Hook → useEffect</h1>
      <div style={{ paddingLeft: 25 }}>
        <ClassExample title="ClassExample" {...newProps} />
        <FunctionExample title="FunctionExample" {...newProps} />
      </div>
      <hr />
    </>
  )
}

export default EffectHook
