import React from 'react'
import { compose, withProps, lifecycle, withHandlers } from 'recompose'

// const RefClassComponent = () => {
//   let button = null
//   const buttonRef = i => {
//     button = i
//     i.style.backgroundColor = 'aqua'
//   }

//   let text = null
//   const textRef = i => {
//     text = i
//     i.style.border = '2px solid red'
//     i.style.backgroundColor = 'green'
//     i.style.width = '200px'

//     // Get the height and width of a element, including padding and border:
//     console.log(i.offsetHeight, i.offsetWidth)

//     // Get the height and width of a element, including padding:
//     console.log(i.clientHeight, i.clientWidth)
//   }

//   return (
//     <div>
//       <input type="text" ref={textRef} />
//       <input type="button" value="Click me" ref={buttonRef} />
//     </div>
//   )
// }

// export default RefClassComponent

const Item = ({ id, changeColor }) => (
  <div className={`Item ${id}`} onClick={changeColor}>
    <p>{`Item ${id}`}</p>
  </div>
)

const RefClassComponent = ({ textRef, buttonRef, children, changeColor }) => {
  return (
    <div>
      <input type="text" ref={textRef} />
      <input type="button" value="Click me" ref={buttonRef} />
      {React.Children.map(children, item => React.cloneElement(item, { pass: true, changeColor }))}
    </div>
  )
}

const RefClassComponentEnhance = compose(
  withProps(() => ({
    textRef: React.createRef(),
    buttonRef: React.createRef(),
  })),
  withHandlers({
    changeColor: ({ textRef, buttonRef }) => _ => {
      textRef.current.style.backgroundColor = 'red'
      buttonRef.current.style.backgroundColor = 'red'
    },
  }),
  lifecycle({
    componentDidMount() {
      const text = this.props.textRef.current
      const button = this.props.buttonRef.current
      text.style.border = '2px solid red'
      text.style.backgroundColor = 'green'
      text.style.width = '200px'
      button.style.backgroundColor = 'aqua'
      button.style.width = '200px'
    },
  }),
)(RefClassComponent)

const Root = () => {
  return (
    <>
      <RefClassComponentEnhance>
        <Item id={1} />
        <Item id={2} />
        <Item id={3} />
        <Item id={4} />
      </RefClassComponentEnhance>
    </>
  )
}

export default Root
