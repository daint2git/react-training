import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RenderNothing from 'hocs/renderNothing'

import Loading from './Loading'

const EnhancedLoading = ({ isLoading }) => (!isLoading ? <RenderNothing /> : <Loading />)

EnhancedLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

const withRedux = connect(state => ({
  isLoading: state.loading.isLoading,
}))

export default withRedux(EnhancedLoading)
