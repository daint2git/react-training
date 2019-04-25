import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Counter from '../'

describe('Counter', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('start with a count of 0', () => {
    const wrapper = shallow(<Counter />)
    const countState = wrapper.state().count
    expect(countState).toEqual(0)
  })

  test('start with a count of 0 (with text)', () => {
    const wrapper = shallow(<Counter />)
    const text = wrapper.find('.counter p').text()
    expect(text).toEqual('Current count: 0')
  })

  test('increment count when the button is clicked', () => {
    const wrapper = shallow(<Counter />)
    const incrementBtn = wrapper.find('button[name="increment"]')
    incrementBtn.simulate('click')
    const text = wrapper.find('.counter p').text()
    expect(text).toEqual('Current count: 1')
  })

  test('decrement count when the button is clicked', () => {
    const wrapper = shallow(<Counter />)
    const decrementBtn = wrapper.find('button[name="decrement"]')
    decrementBtn.simulate('click')
    const text = wrapper.find('.counter p').text()
    expect(text).toEqual('Current count: -1')
  })
  test('spyOn', () => {
    const wrapper = shallow(<Counter props={{ prop1: 'a', props2: 2 }} otherProps={12} />)
    console.log('wapper', wrapper.instance().props) // { props: { prop1: 'a', props2: 2 }, otherProps: 12 }
    console.log('wapper', wrapper.state()) // { count: 0 }
  })
})
