import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #2196f3;
  padding: 10px;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`

const UserName = styled.div`
  padding-right: 10px;
`

function AppHeader({ user, message }) {
  return (
    <Header>
      <h2 className="title">Header, here</h2>
      <UserInfo>
        <UserName>Hello {user.name}</UserName>
        <div className="message">
          <h4>{message.title}</h4>
          <p>{message.content}</p>
        </div>
      </UserInfo>
    </Header>
  )
}

AppHeader.defaultProps = {
  user: {},
  message: {},
}

AppHeader.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    carrer: PropTypes.string,
  }),
  message: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
}

export default AppHeader
