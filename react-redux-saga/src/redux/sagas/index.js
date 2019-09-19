import { all, fork } from 'redux-saga/effects'

import repos from './repos'
import counter from './counter'
import './reselect'

export default function*() {
  yield all([fork(repos), fork(counter)])
}
