import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import reducer, { fetchRepos } from 'redux/reducers/repos'
import saga from 'redux/sagas/repos'
import { listSelector } from 'redux/selectors/repos'
import { useInjectReducer } from 'redux/utils/injectReducer'
import { useInjectSaga } from 'redux/utils/injectSaga'

const CONTEXT = 'repos'

const Repos = () => {
  useInjectReducer({ key: CONTEXT, reducer })
  useInjectSaga({ key: CONTEXT, saga })
  const dispatch = useDispatch()
  const onFetch = useCallback(() => {
    dispatch(fetchRepos())
  }, [dispatch])
  useEffect(() => {
    onFetch()
  }, [onFetch])
  const list = useSelector(listSelector())

  return (
    <div>
      <button type="button" onClick={onFetch}>
        Fetch new repos
      </button>
      <h3>Repos</h3>
      <ul>
        {list.map(repo => (
          <li key={repo.id}>{repo.html_url}</li>
        ))}
      </ul>
    </div>
  )
}

export default Repos
