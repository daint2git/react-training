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

describe('async await test', () => {
  test('the data is peanut butter', async () => {
    const data = await fetchDataSuccess()
    expect(data).toBe('peanut butter')
  })

  test('the data is peanut butter', async () => {
    await expect(fetchDataSuccess()).resolves.toBe('peanut butter')
  })

  test('the fetch fails with an error', async () => {
    try {
      await fetchDataFail()
    } catch (e) {
      expect(e).toBe('error')
    }
  })

  test('the fetch fails with an error', async () => {
    await expect(fetchDataFail()).rejects.toBe('error')
  })
})
