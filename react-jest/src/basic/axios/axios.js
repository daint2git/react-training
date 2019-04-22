import axios from 'axios'

const BASE_URL = 'https://api.github.com/repos/daint2git'

const getRepoByName = async name => {
  const resp = await axios.get(`${BASE_URL}/${name}`)
  return resp.data
}

export { getRepoByName }
