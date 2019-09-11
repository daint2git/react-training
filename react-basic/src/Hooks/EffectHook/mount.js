import React from 'react'

class ComA extends React.Component {
  ref = React.createRef(null)
  componentDidMount() {
    console.log('ComA', this.ref.current)
  }
  render() {
    return <input type="text" id="comA" ref={this.ref} />
  }
}

const ComB = () => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    console.log('ComB', ref.current)
  })
  return <input type="text" id="comB" ref={ref} />
}

const ComC = () => {
  const ref = React.useRef(null)
  React.useLayoutEffect(() => {
    console.log('ComC', ref.current)
  })
  return <input type="text" id="comC" ref={ref} />
}

export default () => {
  return (
    <>
      <ComA />
      <ComB />
      <ComC />
    </>
  )
}
