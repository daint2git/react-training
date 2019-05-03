import BirdStore from './BirdStore'
import RepoStore from './RepoStore'

const stores = {
  BirdStore,
  RepoStore,
}

if (process.env.NODE_ENV === 'development') {
  // For easier debugging
  window.__APP_STATE__ = stores
}

export default stores
