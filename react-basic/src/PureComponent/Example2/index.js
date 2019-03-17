import React from 'react'
import { pure } from 'recompose'

class Parent extends React.Component {
  state = {
    conditions: {
      text: '',
      count: 0,
    },
    list: [],
  }

  onChange = e => {
    e.persist()
    this.setState(prevState => ({
      conditions: {
        ...prevState.conditions,
        text: e.target.value,
      },
    }))
  }

  onClick = () =>
    this.setState(prevState => ({
      conditions: {
        ...prevState.conditions,
        count: prevState.conditions.count + 1,
      },
    }))

  onListAdd = e => {
    e.persist()
    this.setState(prevState => ({
      list: [...prevState.list, e.target.value],
    }))
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} />
        <button onClick={this.onClick}>Click</button>
        <Conditions conditions={this.state.conditions} />
        <input type="text" onChange={this.onListAdd} />
        <List list={this.state.list} />
      </div>
    )
  }
}

class List extends React.PureComponent {
  render() {
    console.log('list')
    return (
      <>
        {this.props.list.map(item => (
          <div key={item}>{item}</div>
        ))}
      </>
    )
  }
}

const Conditions = pure(({ conditions }) => {
  console.log('conditions')
  return (
    <div>
      <p>{`text: ${conditions.text}`}</p>
      <p>{`count: ${conditions.count}`}</p>
    </div>
  )
})

export default Parent
