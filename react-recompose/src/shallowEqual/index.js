import React from 'react'
import { shallowEqual } from 'recompose'

const objA = {
  a: 'a',
  b: 1,
  c: [1, 2, 3],
}

const objB = {
  a: 'a',
  b: 1,
  c: [1, 2, 3],
}

const objC = { ...objA }
const objD = { ...objB }
const objE = {
  ...objA,
  a: 'a',
  b: 1,
}

console.log(shallowEqual([], [])) // true
console.log(shallowEqual({}, {})) // true
console.log(shallowEqual({ a: 'a' }, { a: 'a' })) // true
console.log(objA, objB, shallowEqual(objA, objB)) // false
console.log(objA, objC, shallowEqual(objA, objC)) // true
console.log(objA, objD, shallowEqual(objA, objD)) // false
console.log(objA, objE, shallowEqual(objA, objE)) // true

const objPerson = {
  name: 'A',
  skill: {
    eng: true,
    react: true,
    angular: false,
  },
}

const objOtherPerson = {
  name: 'A',
  skill: {
    eng: true,
    react: true,
    angular: false,
  },
}

const objOtherPerson2 = {
  name: objPerson.name,
  skill: {
    ...objPerson.skill,
  },
}

console.log(objPerson, objOtherPerson, shallowEqual(objPerson, objOtherPerson)) // false
console.log(objPerson, objOtherPerson2, shallowEqual(objPerson, objOtherPerson2)) // false
console.log(objPerson, objOtherPerson2, shallowEqual(objPerson, objOtherPerson2)) // false

const Test = () => <div>shallowEqual test</div>

export default Test
