import React, { useState, useCallback } from 'react'
import Proptypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames/bind'
import { simpleLocalStorage } from 'simple-storage'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import useDocumentTitle from 'hooks/useDocumentTitle'
import { ROUTES, LANGUAGE_OPTIONS } from 'utils/constants'

import styles from './styles'

const cx = classnames.bind(styles)

const Navbar = ({ location }) => {
  const { t, i18n } = useTranslation()
  const [isOpen, toggle] = useState(false)

  const onLanguageChange = useCallback(
    e => {
      const lng = e.target.value
      i18n.changeLanguage(lng).then(() => simpleLocalStorage.setItem('language', lng))
    },
    [i18n],
  )

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
      <Dropdown isOpen={isOpen} toggle={() => toggle(!isOpen)} className={cx('dropdown')}>
        <DropdownToggle caret>Language</DropdownToggle>
        <DropdownMenu>
          {LANGUAGE_OPTIONS.map(option => (
            <DropdownItem
              key={option.value}
              {...option}
              active={option.value === i18n.language}
              onClick={onLanguageChange}
            />
          ))}
        </DropdownMenu>
      </Dropdown>
    </nav>
  )
}

Navbar.propTypes = {
  location: Proptypes.object,
}

export default withRouter(Navbar)
