// https://api.github.com/users/daint2git/repos
import { observable, action, computed } from 'mobx'
import axios from 'axios'

import Request from '../Request'
export class RepoStore {
  @observable repos = []

  @action.bound
  async fetchRepos() {
    // const res = await axios.get('https://api.github.com/users/daint2git/repos')
    const res = await Request({
      method: 'get',
      url: 'https://api.github.com/users/daint2git/repos',
    })
    if (Array.isArray(res.data) && res.data.length > 0) {
      const repos = res.data.map(repo => ({
        id: repo.id,
        htmlUrl: repo.html_url,
      }))
      this.repos = repos
    }
  }

  // @action
  // fetchRepos = async () => {
  //   const res = await axios.get('https://api.github.com/users/daint2git/repos')
  //   if (Array.isArray(res.data) && res.data.length > 0) {
  //     const repos = res.data.map(repo => ({
  //       id: repo.id,
  //       htmlUrl: repo.html_url,
  //     }))
  //     this.repos = repos
  //   }
  // }

  @computed
  get repoCount() {
    return this.repos.length
  }
}

export default new RepoStore()
