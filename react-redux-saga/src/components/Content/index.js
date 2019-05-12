import React from 'react'

class Content extends React.Component {
  state = { data: [] }

  componentDidMount() {
    this.load()
  }

  load = async () => {
    const result = await Array.from([1, 2, 3], x => x + x)
    this.setState({ data: result })
  }

  render() {
    const { data } = this.state
    return <div>{data}</div>
  }
}

export default Content
