import React from 'react'

const MyButton = React.forwardRef((props, ref) => (
  <button ref={ref} onClick={props.onClick}>
    {props.children}
  </button>
))

const MyText = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} onChange={props.onChange} />
))

const Parent = () => {
  const buttonRef = React.createRef()
  const textInputRef = React.createRef()
  const onClick = () => console.log(buttonRef.current) // <button>Click me</button>
  const onChange = () => console.log(textInputRef.current) // <input type="text">

  return (
    <div>
      <MyText ref={textInputRef} onChange={onChange} />
      <MyButton ref={buttonRef} onClick={onClick}>
        Click me
      </MyButton>
    </div>
  )
}

export default () => <Parent />
