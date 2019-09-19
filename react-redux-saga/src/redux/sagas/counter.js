import { all, put, takeEvery, call } from 'redux-saga/effects'

import { INCREMENT_ASYNC, increment } from 'redux/reducers/counter'

const delay = ms => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  // yield delay(1000)
  yield call(delay, 1000)
  yield put(increment())
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export default function*() {
  yield all([watchIncrementAsync()])
}
