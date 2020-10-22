import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { reposListSelector } from 'redux/selectors/repos'
import reducer, { fetchRepos } from 'redux/reducers/repos'
import saga from 'redux/sagas/repos'
import useInjectReducer from 'redux/injectReducer'
import useInjectSaga from 'redux/injectSaga'

const key = 'repos'

const RepoPage = ({ list, handleFetch }) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  // const list = useSelector(reposListSelector())
  // useSelector(state => {
  //   console.log(state)
  // })
  // const dispatch = useDispatch()

  // const handleFetch = () => {
  //   dispatch(fetchRepos())
  // }

  // console.log('render RepoPage')

  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch new repos
      </button>
      {list.length > 0 && (
        <>
          <h3>Repos</h3>
          <ul>
            {list.map(repo => (
              <li key={repo.id}>{repo.html_url}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default connect(
  state => ({
    list: reposListSelector(state),
  }),
  { handleFetch: fetchRepos },
)(RepoPage)
// export default RepoPage
