import React from 'react'
import { connect } from 'react-redux'

import { fetchRepos } from 'redux/reducers/repos'

const Content = ({ list, onFetch }) => {
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

const mapStateToProps = state => ({
  list: state.repos.list,
})

const mapDispatchToProps = {
  onFetch: fetchRepos,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content)
