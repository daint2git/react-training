import React from 'react'
import { inject, observer } from 'mobx-react'
import sum from 'lodash/sum'
import { withTranslation, useTranslation } from 'react-i18next'
import RepoContainer from '@components/RepoContainer'
import RepoList from '@components/RepoList'

@inject('RepoStore')
@observer
class RepoView extends React.Component {
  componentDidMount() {
    const {
      RepoStore: { fetchRepos },
    } = this.props

    fetchRepos()
  }

  changeLanguage = lng => {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  render() {
    const {
      RepoStore: { repos, repoCount },
      t,
    } = this.props

    console.log('withTranslation', withTranslation, useTranslation, this.props.i18n)

    return (
      <RepoContainer className={`container`}>
        <h3>Repos</h3>
        <h4>{sum([1, 2, 3])}</h4>
        <RepoList repos={repos} repoCount={repoCount} />
        <br />
        <p>{t('description.part1')}</p>
        <p>{t('description.part2')}</p>
        <div>
          <button onClick={() => this.changeLanguage('vi')}>vi</button>
          <button onClick={() => this.changeLanguage('en')}>en</button>
        </div>
      </RepoContainer>
    )
  }
}

export default withTranslation()(RepoView)
