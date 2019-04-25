import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  padding: 20px;
`

const StyledInputText = styled.input`
  width: 200px;
  height: 40px;
`

const StyledButton = styled.button`
  color: white;
  backgroundcolor: black;
`

export default class Form2 extends React.Component {
  state = { email: '' }

  handleMailChange = e => {
    this.setState({ email: e.target.value })
  }

  handleAdd = e => {
    e.preventDefault()
    this.props.onAdd(this.state.email)
  }

  render() {
    return (
      <StyledForm>
        <StyledInputText
          type="text"
          name="email"
          value={this.state.value}
          onChange={this.handleMailChange}
        />
        <StyledButton onClick={this.handleAdd}>Add</StyledButton>
      </StyledForm>
    )
  }
}
