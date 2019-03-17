import React from 'react'
import { renderNothing } from 'recompose'

const Test = props => <div>will never be rendered!</div>

export default renderNothing(Test)
