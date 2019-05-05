import RepoList from './'

const renderComponentWithStore = store => mount(<RepoList RepoStore={store} />)

describe('RepoList', () => {
  let wrapper

  afterEach(() => {
    wrapper.unmount()
  })

  test('should render correctly default data', () => {
    const mockStore = {
      // observable
      repos: [],
      repoCount: 0,
      // actions
      fetchRepos: jest.fn(),
    }
    wrapper = renderComponentWithStore(mockStore)
    expect(wrapper).toMatchSnapshot()
  })

  test('should render correctly mock data', () => {
    const repos = [
      {
        id: 1,
        htmlUrl: 'abc1',
      },
      {
        id: 2,
        htmlUrl: 'abc2',
      },
    ]

    const mockStore = {
      // observable
      repos,
      repoCount: repos.length,
      // actions
      fetchRepos: jest.fn(),
    }

    wrapper = renderComponentWithStore(mockStore)
    expect(wrapper).toMatchSnapshot()
  })

  test('should call fetchRepos callback', () => {
    const mockStore = {
      // observable
      repos: [],
      repoCount: 0,
      // actions
      fetchRepos: jest.fn(),
    }
    wrapper = renderComponentWithStore(mockStore)
    expect(mockStore.fetchRepos).toHaveBeenCalled()
    expect(mockStore.fetchRepos).toHaveBeenCalledTimes(1)
  })
})
