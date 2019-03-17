import React from 'react'
import styles from './styles.scss'

const Button = ({ type = 'primary', ...rest }) => (
  <button type="button" className={`${styles.root}`} data-type={type} {...rest} />
)

export default Button
