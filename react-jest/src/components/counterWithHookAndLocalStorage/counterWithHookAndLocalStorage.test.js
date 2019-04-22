import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '.'

describe('CounterWithHooks', () => {
  afterEach(() => {
    window.localStorage.removeItem('count')
  })

  test('reads and writes to localStorage (count is undefined)', () => {
    const { container } = render(<Counter />)
    const incrementBtn = container.querySelector('button[name="increment"]')
    fireEvent.click(incrementBtn)
    expect(window.localStorage.getItem('count')).toEqual('1')
  })

  test('reads and writes to localStorage (increment)', () => {
    window.localStorage.setItem('count', 5)
    const { container } = render(<Counter />)
    const incrementBtn = container.querySelector('button[name="increment"]')
    fireEvent.click(incrementBtn)
    expect(window.localStorage.getItem('count')).toEqual('6')
  })

  test('reads and writes to localStorage (decrement)', () => {
    window.localStorage.setItem('count', 5)
    const { container } = render(<Counter />)
    const decrementBtn = container.querySelector('button[name="decrement"]')
    fireEvent.click(decrementBtn)
    expect(window.localStorage.getItem('count')).toEqual('4')
  })

  test('step is 5 + reads and writes to localStorage', () => {
    window.localStorage.setItem('count', 5)
    const { container } = render(<Counter step={5} />)
    const incrementBtn = container.querySelector('button[name="increment"]')
    fireEvent.click(incrementBtn)
    expect(window.localStorage.getItem('count')).toEqual('10')
  })

  test('matches the snapshot', () => {
    const { asFragment } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('matches the snapshot when click increment button', () => {
    const { container } = render(<Counter />)
    const incrementBtn = container.querySelector('button[name="increment"]')
    fireEvent.click(incrementBtn)
    const { asFragment } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
  })
})
