const fetchDataSuccess = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('peanut butter')
    }, 200),
  )

const fetchDataFail = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject('error')
    }, 200),
  )

describe('promises test', () => {
  test('the data is peanut butter', () => {
    return fetchDataSuccess().then(data => {
      expect(data).toBe('peanut butter')
    })
  })

  test('the data is peanut butter', () => {
    return expect(fetchDataSuccess()).resolves.toBe('peanut butter')
  })

  test('the fetch fails with an error', () => {
    return fetchDataFail().catch(err => expect(err).toBe('error'))
  })

  test('the fetch fails with an error', () => {
    return expect(fetchDataFail()).rejects.toBe('error')
  })
})
