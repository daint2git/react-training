import mockAxios from 'axios'
import { getRepoByName } from './axios'

jest.mock('axios')

describe('axios', () => {
  test('get method', async () => {
    const repoName = 'docker-react-express-postgresql'
    const mockData = {
      id: 170172544,
      html_url: 'https://github.com/daint2git/docker-react-express-postgresql',
      git_url: 'git://github.com/daint2git/docker-react-express-postgresql.git',
    }

    // setup
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }))

    // work
    const data = await getRepoByName(repoName)

    // assertions / expects
    expect(data).toEqual(mockData)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://api.github.com/repos/daint2git/docker-react-express-postgresql',
    )
  })
})
