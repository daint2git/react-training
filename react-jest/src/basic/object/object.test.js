import { data } from './object'

test('object example', () => {
  expect(data).toEqual({
    firstName: 'Dai',
    age: 26,
    career: 'developer',
  })
})
