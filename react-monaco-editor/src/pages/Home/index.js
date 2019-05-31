import React from 'react'
import classnames from 'classnames/bind'
import { useTranslation } from 'react-i18next'

import reactLogo from 'svgs/react-logo.svg'
import reduxLogo from 'svgs/redux-logo.svg'
import MonacoEditor from 'components/organisms/MonacoEditor'

import styles from './styles.scss'

const cx = classnames.bind(styles)

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={cx('root')}>
        <div className={cx('header')}>
          <h1 className={cx('title')}>{t('title')}</h1>
          <img className={cx('logo')} src={reactLogo} alt="react-logo" />
          <img className={cx('logo')} src={reduxLogo} alt="redux-logo" />
        </div>
      </div>
      <MonacoEditor />
    </>
  )
}

export default Home
