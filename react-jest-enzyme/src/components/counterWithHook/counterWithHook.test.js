import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Counter from '.'

describe('CounterWithHooks', () => {
  test('start with a count of 0', () => {
    const { container } = render(<Counter />)
    const text = container.querySelector('.counter p').textContent
    expect(text).toEqual('Current count: 0')
  })

  test('start with initial count is 10', () => {
    const { container } = render(<Counter initialCount={10} />)
    const text = container.querySelector('.counter p').textContent
    expect(text).toEqual('Current count: 10')
  })

  test('increment count when the button is clicked', () => {
    const { container } = render(<Counter />)
    const incrementBtn = container.querySelector('button[name="increment"]')
    fireEvent.click(incrementBtn)
    const text = container.querySelector('.counter p').textContent
    expect(text).toEqual('Current count: 1')
  })

  test('decrement count when the button is clicked', () => {
    const { container } = render(<Counter />)
    const decrementBtn = container.querySelector('button[name="decrement"]')
    fireEvent.click(decrementBtn)
    const text = container.querySelector('.counter p').textContent
    expect(text).toEqual('Current count: -1')
  })

  test('step is 5 + increment count when the button is clicked', () => {
    const { container } = render(<Counter step={5} />)
    const currentText = container.querySelector('.counter p').textContent
    expect(currentText).toEqual('Current count: 0')
    const incrementBtn = container.querySelector('button[name="increment"]')
    fireEvent.click(incrementBtn)
    const nextText = container.querySelector('.counter p').textContent
    expect(nextText).toEqual('Current count: 5')
  })
})
