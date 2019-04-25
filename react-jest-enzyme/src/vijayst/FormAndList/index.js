import React from 'react'

import Form2 from '../Form2'
import List from '../List'

export default class FormAndList extends React.Component {
  state = { list: [] }

  handleAdd = name => {
    this.setState(prevState => ({ list: [...prevState.list, name] }))
  }

  render() {
    return (
      <div>
        <Form2 onAdd={this.handleAdd} />
        <List data={this.state.list} />
      </div>
    )
  }
}
