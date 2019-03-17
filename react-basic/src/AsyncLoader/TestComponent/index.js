import React from 'react'
import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../reducer'
import asyncLoader from '../asyncLoader'

const TestComponent = ({ list }) => (
  <>
    {list.map(element => (
      <div key={element.id}>{element.email}</div>
    ))}
  </>
)

export default compose(
  connect(
    state => ({ list: state.list || [] }),
    dispatch => bindActionCreators({ fetchData }, dispatch),
  ),
  asyncLoader(props => props.fetchData()),
  withProps({ text: 'abc' }),
)(TestComponent)
