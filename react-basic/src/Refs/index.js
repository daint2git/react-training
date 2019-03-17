import React from 'react'
import { compose, withProps, withHandlers } from 'recompose'

class RefClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.textInputRef = React.createRef()
  }

  handleClick = () => console.log(this.textInputRef.current) // <input type="text">

  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <input type="button" value="Click me" onClick={this.handleClick} />
      </div>
    )
  }
}

const RefFunctionComponent = () => {
  let textInputRef = React.createRef()
  const handleClick = () => console.log(textInputRef.current) // <input type="text">

  return (
    <div>
      <input type="text" ref={textInputRef} />
      <input type="button" value="Click me" onClick={handleClick} />
    </div>
  )
}

class CallbackRefClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null
    this.textInputRef = element => (this.textInput = element)
  }

  handleClick = () => console.log(this.textInput) // <input type="text">

  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <input type="button" value="Click me" onClick={this.handleClick} />
      </div>
    )
  }
}

const CallbackRefFunctionComponent = () => {
  let textInput = null
  const textInputRef = element => (textInput = element)
  const handleClick = () => console.log(textInput) // <input type="text">

  return (
    <div>
      <input type="text" ref={textInputRef} />
      <input type="button" value="Click me" onClick={handleClick} />
    </div>
  )
}

const ParentRefComponent = () => {
  let textInput = null
  const textInputRef = element => (textInput = element)
  const handleClick = () => console.log(textInput) // <input type="text">
  return <ChildRefComponent inputRef={textInputRef} onClick={handleClick} />
}

const ChildRefComponent = ({ inputRef, onClick }) => (
  <div>
    <input type="text" ref={inputRef} />
    <input type="button" value="Click me" onClick={onClick} />
  </div>
)

const RefWithRecompose = compose(
  withProps(() => ({ textInputRef: React.createRef() })),
  withHandlers({
    handleClick: ({ textInputRef }) => () => console.log(textInputRef.current),
  }),
)(({ id, textInputRef, handleClick }) => (
  <div>
    <input id={id} type="text" ref={textInputRef} />
    <input type="button" value="Click me" onClick={handleClick} />
  </div>
))

export default () => (
  <>
    <RefClassComponent />
    <RefFunctionComponent />
    <CallbackRefClassComponent />
    <CallbackRefClassComponent />
    <CallbackRefFunctionComponent />
    <ParentRefComponent />
    <RefWithRecompose id={1} />
    <RefWithRecompose id={2} />
  </>
)
