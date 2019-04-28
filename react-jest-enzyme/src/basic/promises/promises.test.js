const fetchDataSuccess = () => new Promise((resolve, reject) => resolve('peanut butter'))

const fetchDataFail = () => new Promise((resolve, reject) => reject('fake error'))

describe('promises', () => {
  test('the data is peanut butter', () => {
    return fetchDataSuccess().then(data => {
      expect(data).toBe('peanut butter')
    })
  })

  test('the data is peanut butter (2)', () => {
    return expect(fetchDataSuccess()).resolves.toBe('peanut butter')
  })

  test('the fetch fails with an error', () => {
    expect.assertions(1)
    return fetchDataFail().catch(err => expect(err).toMatch('error'))
  })

  test('the fetch fails with an error (2)', () => {
    expect.assertions(1)
    return expect(fetchDataFail()).rejects.toMatch('error')
  })
})
