import RepoStore from './RepoStore'

const stores = {
  RepoStore: new RepoStore(),
}

if (process.env.NODE_ENV === 'development') {
  // For easier debugging
  window.__APP_STATE__ = stores
}

export default stores
