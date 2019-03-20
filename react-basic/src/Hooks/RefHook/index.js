import React, { useRef } from 'react'

function Example(props) {
  console.log('render')
  const textRef = useRef(null)
  // const textRef = React.createRef()

  const handleClick = () => {
    console.log(textRef.current.value)
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <input type="text" ref={textRef} />
    </div>
  )
}

export default Example
