import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedDate, FormattedTime } from 'react-intl'

class FormattedDatedemo extends PureComponent {
  render() {
    const { currentTime } = this.props

    return (
      <p>
        The date in Tokyo is: <FormattedDate value={currentTime} />
        <br />
        The time in Tokyo is: <FormattedTime value={currentTime} />
      </p>
    )
  }
}

FormattedDatedemo.propTypes = {
  currentTime: PropTypes.object,
}

FormattedDatedemo.defaultProps = {
  currentTime: new Date(),
}

export default FormattedDatedemo
