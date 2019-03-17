import axios from 'axios'
import { steps } from 'redux-effects-steps'

const fetchDataSuccess = ({ data }) => ({
  type: 'FECTH_DATA_SUCCESS',
  payload: data,
})

export const fetchData = () => steps(axios.get('http://localhost:9696/accounts'), fetchDataSuccess)

const INITIAL_STATE = () => ({ list: [] })

const reducer = (state = INITIAL_STATE(), action) => {
  const { type, payload } = action
  switch (type) {
    case 'FECTH_DATA_SUCCESS':
      return { ...state, list: payload }
    default:
      return state
  }
}

export default reducer
