export const FETCH_REPOS = 'FETCH_REPOS'
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS'
export const FETCH_REPOS_FAIL = 'FETCH_REPOS_FAIL'

export const fetchRepos = () => ({
  type: FETCH_REPOS,
})

export const fetchReposSuccess = ({ data }) => ({
  type: FETCH_REPOS_SUCCESS,
  payload: data,
})

export const fetchReposFail = () => ({
  type: FETCH_REPOS_FAIL,
})

const initialState = {
  list: [],
}

const repos = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_REPOS:
      return state
    case FETCH_REPOS_SUCCESS:
      return { ...state, list: payload }
    case FETCH_REPOS_FAIL:
      return state
    default:
      return state
  }
}

export default repos
