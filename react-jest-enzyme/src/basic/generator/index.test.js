import generator from '.'

test('generator', () => {
  const iterator = generator()
  expect(iterator.next().value).toEqual(1)
  expect(iterator.next().value).toEqual(2)
  expect(iterator.next().value).toEqual(3)
  expect(iterator.next().value).toEqual(undefined)
})
