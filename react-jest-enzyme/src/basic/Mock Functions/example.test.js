import * as mathExample from './mathExample'
import * as math from './math'
/*
  Có 3 loại module chính và function mocking trong jest
  - jest.fn: Mock a function
  - jest.mock: Mock a module (does this automatically for all functions in a module)
  - jest.spyOn: Spy or mock a function (does the same thing but allows restoring the original function)
*/

describe('Mock Functions', () => {
  // test('returns undefined by default', () => {
  //   const mock = jest.fn()

  //   expect(mock('foo')).toBeUndefined()
  //   expect(mock).toHaveBeenCalled()
  //   expect(mock).toHaveBeenCalledTimes(1)
  //   expect(mock).toHaveBeenCalledWith('foo')
  // })

  test('returns undefined by default', () => {
    const mock = jest.fn()
    mock.mockName('Test mock name')
    console.log('name', mock.getMockName())

    expect(mock('foo')).toBeUndefined()
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('foo')
  })

  // test('mock implementation', () => {
  //   const mock = jest.fn(() => 'bar')

  //   expect(mock('foo')).toBe('bar')
  //   expect(mock).toHaveBeenCalledWith('foo')
  // })

  // test('also mock implementation', () => {
  //   const mock = jest.fn().mockImplementation(() => 'bar')

  //   expect(mock('foo')).toBe('bar')
  //   expect(mock).toHaveBeenCalledWith('foo')
  // })

  // test('mock implementation one time', () => {
  //   const mock = jest.fn().mockImplementationOnce(() => 'bar')

  //   expect(mock('foo')).toBe('bar')
  //   expect(mock).toHaveBeenCalledWith('foo')

  //   expect(mock('baz')).toBe(undefined)
  //   expect(mock).toHaveBeenCalledWith('baz')
  // })

  // test('mock return value', () => {
  //   const mock = jest.fn()
  //   mock.mockReturnValue('bar')

  //   expect(mock('foo')).toBe('bar')
  //   expect(mock).toHaveBeenCalledWith('foo')
  // })

  // test('mock promise resolution', () => {
  //   const mock = jest.fn()
  //   mock.mockResolvedValue('bar')

  //   expect(mock('foo')).resolves.toBe('bar')
  //   expect(mock).toHaveBeenCalledWith('foo')
  // })

  // test('Mock callback', () => {
  //   function forEach(items, callback) {
  //     for (let index = 0; index < items.length; index++) {
  //       callback(items[index])
  //     }
  //   }

  //   const mockCallback = jest.fn(x => 42 + x)

  //   forEach([0, 1], mockCallback)

  //   // The mock function is called twice
  //   expect(mockCallback.mock.calls.length).toBe(2)

  //   // The first argument of the first call to the function was 0
  //   expect(mockCallback.mock.calls[0][0]).toBe(0)

  //   // The first argument of the second call to the function was 1
  //   expect(mockCallback.mock.calls[1][0]).toBe(1)

  //   // The return value of the first call to the function was 42
  //   expect(mockCallback.mock.results[0].value).toBe(42)

  //   // The return value of the second call to the function was 43
  //   expect(mockCallback.mock.results[1].value).toBe(43)
  // })

  // test('all functions in ./math', () => {
  //   const addMock = jest.fn(math.add)
  //   const subtractMock = jest.fn(math.subtract)
  //   const multiplyMock = jest.fn(math.multiply)
  //   const divideMock = jest.fn(math.divide)

  //   expect(addMock(1, 2)).toBe(3)
  //   expect(subtractMock(1, 2)).toBe(1)
  //   expect(multiplyMock(1, 2)).toBe(2)
  //   expect(divideMock(1, 2)).toBe(2)
  // })

  // test('jest.fn', () => {
  //   math.add = jest.fn()
  //   math.subtract = jest.fn()
  //   math.multiply = jest.fn()
  //   math.divide = jest.fn()

  //   mathExample.doAdd(1, 2)
  //   expect(math.add).toHaveBeenCalledWith(1, 2)
  //   mathExample.doSubtract(1, 2)
  //   expect(math.subtract).toHaveBeenCalledWith(1, 2)
  //   mathExample.doMultiply(1, 2)
  //   expect(math.multiply).toHaveBeenCalledWith(1, 2)
  //   mathExample.doDivide(1, 2)
  //   expect(math.divide).toHaveBeenCalledWith(1, 2)
  // })

  // test('jest.mock', () => {
  //   // Set all module functions to jest.fn
  //   jest.mock('./math')

  //   mathExample.doAdd(1, 2)
  //   expect(math.add).toHaveBeenCalledWith(1, 2)
  //   mathExample.doSubtract(1, 2)
  //   expect(math.subtract).toHaveBeenCalledWith(1, 2)
  //   mathExample.doMultiply(1, 2)
  //   expect(math.multiply).toHaveBeenCalledWith(1, 2)
  //   mathExample.doDivide(1, 2)
  //   expect(math.divide).toHaveBeenCalledWith(1, 2)
  // })

  // test('jest.spyOn', () => {
  //   const addMock = jest.spyOn(math, 'add')
  //   const subtractMock = jest.spyOn(math, 'subtract')
  //   const multiplyMock = jest.spyOn(math, 'multiply')
  //   const divideMock = jest.spyOn(math, 'divide')

  //   // calls the original implementation
  //   // expect(mathExample.doAdd(1, 2)).toEqual(3)
  //   // expect(mathExample.doSubtract(1, 2)).toEqual(1)
  //   mathExample.doAdd(1, 2)
  //   mathExample.doSubtract(1, 2)
  //   mathExample.doMultiply(1, 2)
  //   mathExample.doDivide(1, 2)

  //   // and the spy stores the calls to add
  //   expect(addMock).toHaveBeenCalledWith(1, 2)
  //   expect(subtractMock).toHaveBeenCalledWith(1, 2)
  //   expect(multiplyMock).toHaveBeenCalledWith(1, 2)
  //   expect(divideMock).toHaveBeenCalledWith(1, 2)
  // })

  // test('jest.spyOn (2)', () => {
  //   const addMock = jest.spyOn(math, 'add')
  //   // override the implementation
  //   addMock.mockImplementation(() => 'mock')
  //   expect(mathExample.doAdd(1, 2)).toEqual('mock')
  //   expect(addMock).toHaveBeenCalledWith(1, 2)
  //   // restore the original implementation
  //   addMock.mockRestore()
  //   mathExample.doAdd(1, 2)
  //   expect(addMock).toHaveBeenCalledWith(1, 2)
  // })
})
