const counter = 'COUNTER'
const todos = 'TODOS'

const ActionTypes = {
  // counter
  INCREASE: `${counter}/INCREASE`,
  DECREASE: `${counter}/DECREASE`,
  RESET: `${counter}/RESET`,

  // todos
  ADD: `${todos}/ADD`,
  CLEAR: `${todos}/CLEAR`,
}

export default ActionTypes
