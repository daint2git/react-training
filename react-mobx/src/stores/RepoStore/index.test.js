import mockAxios from 'axios'
import { RepoStore } from './'

jest.mock('axios')

describe('RepoStore', () => {
  let store

  beforeEach(() => {
    store = new RepoStore()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('should be equal the initial state', () => {
    expect(store.repos).toEqual([])
    expect(store.repoCount).toBe(0)
  })

  test('should handle fetchRepos (1)', async () => {
    const mockData = [
      {
        id: 183929683,
        html_url: 'https://github.com/daint2git/react-jest-enzyme',
      },
    ]
    mockAxios.get.mockResolvedValue({ data: mockData })
    await store.fetchRepos()
    expect(mockAxios.get).toHaveBeenCalled()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://api.github.com/users/daint2git/repos')
    expect(store.repoCount).toBe(1)
    expect(store.repos).toEqual([
      {
        id: mockData[0].id,
        htmlUrl: mockData[0].html_url,
      },
    ])
  })

  test('should handle fetchRepos (2)', async () => {
    mockAxios.get.mockResolvedValue({ data: {} })
    await store.fetchRepos()
    expect(mockAxios.get).toHaveBeenCalled()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://api.github.com/users/daint2git/repos')
  })
})
