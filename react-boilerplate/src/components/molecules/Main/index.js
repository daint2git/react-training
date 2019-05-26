import React from 'react'
import Proptypes from 'prop-types'
import classnames from 'classnames/bind'

import styles from './styles'

const cx = classnames.bind(styles)

const Main = ({ children }) => <main className={cx('root')}>{children}</main>

Main.propTypes = {
  children: Proptypes.node,
}

export default Main
