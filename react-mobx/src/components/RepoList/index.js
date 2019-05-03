import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('RepoStore')
@observer
class RepoList extends React.Component {
  componentDidMount() {
    const {
      RepoStore: { fetchRepos },
    } = this.props

    fetchRepos()
  }

  render() {
    const {
      RepoStore: { repos, repoCount },
    } = this.props

    return (
      <div>
        <h2>Repos</h2>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.htmlUrl}</li>
          ))}
        </ul>
        <p>Have {repoCount} repos.</p>
      </div>
    )
  }
}

export default RepoList
