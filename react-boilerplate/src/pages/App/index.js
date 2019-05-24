import React from 'react'
import { hot } from 'react-hot-loader'
import classnames from 'classnames/bind'
import { useTranslation } from 'react-i18next'

import reactLogo from 'svgs/react-logo.svg'
import reduxLogo from 'svgs/redux-logo.svg'
import configureRoutes from 'routes/configureRoutes'
import Loading from 'components/molecules/Loading'

import Navigation from './Navigation'
import styles from './styles.scss'

const cx = classnames.bind(styles)

const routes = configureRoutes()

const App = () => {
  const { t, i18n } = useTranslation()
  const onLanguageChange = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className={cx('root')}>
        <div className={cx('header')}>
          <h1 className={cx('title')}>{t('title')}</h1>
          <img className={cx('logo')} src={reactLogo} alt="react-logo" />
          <img className={cx('logo')} src={reduxLogo} alt="redux-logo" />
          <button className={cx('button')} type="button" onClick={() => onLanguageChange('en')}>
            english
          </button>
          <button className={cx('button')} type="button" onClick={() => onLanguageChange('ja')}>
            japanese
          </button>
        </div>
        <div>
          <Navigation />
        </div>
        <div>{routes}</div>
      </div>
      <Loading />
    </>
  )
}

export default hot(module)(App)
