import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'reactstrap'

import cssModuleNameTag from 'utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Button = ({ className, children, ...other }) => (
  <BaseButton className={cssModules`root ${className}`} {...other}>
    {children}
  </BaseButton>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Button
