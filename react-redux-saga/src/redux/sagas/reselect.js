import { createSelector } from 'reselect'

let state = {
  a: {
    first: 5,
  },
  b: 10,
}

const aSelector = state => state.a

const bSelector = state => state.b

const aFirstSelector = createSelector(
  aSelector,
  a => a.first,
)

const sumSelector = createSelector(
  [aFirstSelector, bSelector],
  (aFirst, b) => {
    console.log('Ouput selector running')
    return aFirst + b
  },
)

const result1 = sumSelector(state)
console.log(result1)
console.log('-----')
const result2 = sumSelector(state)
console.log(result2)
console.log('-----')

state = { ...state, b: 11 }
const result3 = sumSelector(state)
console.log(result3)
const result4 = sumSelector(state)
console.log(result4)
