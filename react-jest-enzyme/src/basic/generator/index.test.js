import { generator } from './index'

jest.mock('./index', () => ({
  generator: jest.fn(),
}))

test('generator', () => {
  const iterator = generator()
  console.log('generatorFn', iterator.next().value)
  // const iterator = generator()
  // expect(iterator.next().value).toEqual(1)
  // expect(iterator.next().value).toEqual(2)
  // expect(iterator.next().value).toEqual(3)
  // expect(iterator.next().value).toEqual(undefined)
  expect(generator).toBeDefined()
})
