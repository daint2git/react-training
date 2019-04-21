import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import CounterList from './counter-list'

describe('CounterList', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<CounterList />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('shallow vs mount', () => {
    const shallowWrapper = shallow(<CounterList />)
    const mountWrapper = mount(<CounterList />)

    console.log('shallow html', shallowWrapper.debug())
    console.log('mount html', mountWrapper.debug())
  })

  test('should render two counters by default', () => {
    const wrapper = shallow(<CounterList />)
    const counters = wrapper.find('Counter')
    expect(counters.length).toEqual(2)
  })

  test('add more counters when user click the button', () => {
    const wrapper = shallow(<CounterList />)
    const addBtn = wrapper.find('Button')
    addBtn.simulate('click')
    const counters = wrapper.find('Counter')
    expect(counters.length).toEqual(3)
  })
})
