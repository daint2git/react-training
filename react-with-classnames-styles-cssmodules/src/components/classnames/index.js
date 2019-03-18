import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.scss'

const cx = classNames.bind(styles)

const Example = () => (
  <div
    className={cx(
      'root',
      ['center'],
      { example: true },
      { isHover: true },
      { isFocus: false },
      'false',
    )}
  >
    <p className={cx('content')}>with clasnames</p>
    <span className={cx('')}>abc</span>
  </div>
)

export default Example
