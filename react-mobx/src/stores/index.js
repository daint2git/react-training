import BirdStore from './BirdStore'
import RepoStore from './RepoStore'
import LoaderStore from './LoaderStore'

const stores = {
  BirdStore,
  RepoStore,
  LoaderStore,
}

if (process.env.NODE_ENV === 'development') {
  // For easier debugging
  window.__APP_STATE__ = stores
}

export default stores
