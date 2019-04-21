test('null', () => {
  const value = null
  expect(value).toBeNull()
  expect(value).toBeDefined()
  expect(value).not.toBeUndefined()
  expect(value).not.toBeTruthy()
  expect(value).toBeFalsy()
})

test('zero', () => {
  const value = 0
  expect(value).not.toBeNull()
  expect(value).toBeDefined()
  expect(value).not.toBeUndefined()
  expect(value).not.toBeTruthy()
  expect(value).toBeFalsy()
})
