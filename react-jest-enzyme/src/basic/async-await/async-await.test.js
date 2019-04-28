const fetchDataSuccess = () => new Promise((resolve, reject) => resolve('peanut butter'))

const fetchDataFail = () => new Promise((resolve, reject) => reject('fake error'))

describe('async-await', () => {
  test('the data is peanut butter', async () => {
    expect.assertions(1)
    const data = await fetchDataSuccess()
    expect(data).toBe('peanut butter')
  })

  test('the data is peanut butter (2)', async () => {
    await expect(fetchDataSuccess()).resolves.toBe('peanut butter')
  })

  test('the fetch fails with an error', async () => {
    expect.assertions(1)
    try {
      await fetchDataFail()
    } catch (e) {
      expect(e).toMatch('error')
    }
  })

  test('the fetch fails with an error (2)', async () => {
    await expect(fetchDataFail()).rejects.toMatch('error')
  })
})
