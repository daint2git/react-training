import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '@components/button'

const Wrapper = styled.div`
  display: flex;
`

const ButtonGroup = ({ list, onClick }) => (
  <Wrapper>
    {list.map(child => (
      <Button key={child} className="class" onClick={() => onClick(child)}>
        <strong>{child}</strong>
      </Button>
    ))}
  </Wrapper>
)

ButtonGroup.propTypes = {
  list: PropTypes.array,
}

export default ButtonGroup
