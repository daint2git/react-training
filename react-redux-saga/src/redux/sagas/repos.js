import axios from 'axios'
import { put, call, delay, takeLatest, all } from 'redux-saga/effects'

import { FETCH_REPOS, fetchReposSuccess, fetchReposFail } from 'redux/reducers/repos'
import { startLoading, stopLoading } from 'redux/reducers/loading'

function* fetchReposWorker() {
  try {
    yield put(startLoading())
    const res = yield call(axios.get, 'https://api.github.com/users/daint2git/repos')
    yield delay(2000)
    yield put(stopLoading())
    yield put(fetchReposSuccess({ data: res.data }))
  } catch (err) {
    yield put(fetchReposFail())
  }
}

function* reposSaga() {
  yield all([takeLatest(FETCH_REPOS, fetchReposWorker)])
}

export default reposSaga
