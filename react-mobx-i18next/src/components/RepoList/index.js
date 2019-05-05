import React from 'react'
import { observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

const RepoList = ({ repos, repoCount }) => (
  <>
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.htmlUrl}</li>
      ))}
    </ul>
    <p>Have {repoCount} repos.</p>
  </>
)

export default withTranslation()(observer(RepoList))
