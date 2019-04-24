import React from 'react'
import PropTypes from 'prop-types'

const STATUS = {
  hovered: 'hovered',
  normal: 'normal',
}

class Link extends React.Component {
  state = {
    className: STATUS.normal,
  }

  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.node,
  }

  static defaulProps = {
    url: '#',
  }

  handeMouseEnter = () => {
    this.setState({ className: STATUS.hovered })
  }

  handleMouseLeave = () => {
    this.setState({ className: STATUS.normal })
  }

  render() {
    const { className } = this.state
    const { url, children, ...rest } = this.props
    return (
      <a
        className={className}
        href={url}
        onMouseEnter={this.handeMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...rest}
      >
        {children}
      </a>
    )
  }
}

export default Link
