import React from 'react'
import { inject, observer } from 'mobx-react'
import withStyles from '@hocs/withStyles'

@inject('RepoStore')
@observer
class RepoList extends React.Component {
  componentDidMount() {
    const {
      RepoStore: { fetchRepos },
    } = this.props

    fetchRepos()
  }

  static getCurrentTime() {
    console.log(Date.now())
  }

  render() {
    const {
      RepoStore: { repos, repoCount },
      styles,
    } = this.props

    return (
      <div style={styles}>
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

export default withStyles(RepoList)
