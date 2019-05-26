import React from 'react'
import Proptypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames/bind'

import useDocumentTitle from 'hooks/useDocumentTitle'
import { ROUTES, LANGUAGE_OPTIONS } from 'utils/constants'

import styles from './styles'

const cx = classnames.bind(styles)

const Navbar = ({ location }) => {
  const { t, i18n } = useTranslation()

  const onLanguageChange = e => {
    i18n.changeLanguage(e.target.value)
  }

  useDocumentTitle(t(`routes.${location.pathname.replace('/', '') || 'home'}`))

  return (
    <nav className={cx('root')}>
      <ul className={cx('list')}>
        {ROUTES.map(route => (
          <li key={route.id} className={cx('item')}>
            <Link
              to={route.to}
              className={cx({
                activeClassName: route.to === location.pathname,
              })}
            >
              {t(`routes.${route.label}`)}
            </Link>
          </li>
        ))}
      </ul>
      <select name="languages" value={i18n.language} onChange={onLanguageChange}>
        {LANGUAGE_OPTIONS.map(option => (
          <option key={option.value} {...option} />
        ))}
      </select>
    </nav>
  )
}

Navbar.propTypes = {
  location: Proptypes.object,
}

export default withRouter(Navbar)
