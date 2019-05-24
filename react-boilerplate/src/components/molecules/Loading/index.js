import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RenderNothing from 'hocs/renderNothing'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import Backdrop from 'components/atoms/Backdrop'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Wave = () => (
  <div className={cssModules`wave`}>
    <span className={cssModules`dot`} />
    <span className={cssModules`dot`} />
    <span className={cssModules`dot`} />
  </div>
)

const Loading = ({ isLoading }) => {
  if (!isLoading) return <RenderNothing />
  return (
    <Backdrop type="loading">
      <div className={cssModules`root`}>
        <Wave />
      </div>
    </Backdrop>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

const withRedux = connect(state => ({
  isLoading: state.loading.isLoading,
}))

export default withRedux(Loading)
