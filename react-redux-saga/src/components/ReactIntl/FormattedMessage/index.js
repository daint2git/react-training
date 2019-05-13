import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

class FormattedMessageDemo extends Component {
  state = {
    name: 'Eric',
    unreadCount: 1000,
  }

  render() {
    const { name, unreadCount } = this.state

    return (
      <p>
        <FormattedMessage
          id="welcome"
          defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
          values={{ name: <b>{name}</b>, unreadCount }}
        />
      </p>
    )
  }
}

export default FormattedMessageDemo
