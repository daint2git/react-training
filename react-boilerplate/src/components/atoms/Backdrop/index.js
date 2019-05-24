import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Backdrop = ({ className, type, ...other }) => (
  <div className={cssModules`root ${className} ${type}`} {...other} />
)

Backdrop.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['loading']),
}

Backdrop.defaultProps = {
  type: 'loading',
}

export default Backdrop
