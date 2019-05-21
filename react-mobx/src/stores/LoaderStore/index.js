import { observable, action } from 'mobx'

export class LoaderStore {
  @observable isLoading = false

  @action.bound
  startLoading() {
    this.isLoading = true
  }

  @action.bound
  stopLoading() {
    this.isLoading = false
  }
}

export default new LoaderStore()
