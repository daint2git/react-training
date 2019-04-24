import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import CounterList from './counter-list'

describe('CounterList', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<CounterList />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('render correctly (shallow)', () => {
    const tree = shallow(<CounterList />)
    expect(tree).toMatchSnapshot()
  })

  test('render correctly (mount)', () => {
    const tree = mount(<CounterList />)
    expect(tree).toMatchSnapshot()
  })

  test('render correctly (render)', () => {
    const tree = render(<CounterList />)
    expect(tree).toMatchSnapshot()
  })

  // test('debug shallow vs mount', () => {
  //   const shallowWrapper = shallow(<CounterList />)
  //   const mountWrapper = mount(<CounterList />)

  //   console.log('shallow html', shallowWrapper.debug())
  //   console.log('mount html', mountWrapper.debug())
  // })

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

  test('initialNumberCounters props is 10', () => {
    const wrapper = shallow(<CounterList initialNumberCounters={10} />)
    expect(wrapper.instance().props).toEqual({ initialNumberCounters: 10 })
  })

  test('initialNumberCounters props is 10 (2)', () => {
    const wrapper = shallow(<CounterList initialNumberCounters={10} />)
    expect(wrapper.instance().props.initialNumberCounters).toEqual(10)
  })

  test('numberCounters state is 10 when initialNumberCounters props is 10', () => {
    const wrapper = shallow(<CounterList initialNumberCounters={10} />)
    expect(wrapper.state().numberCounters).toEqual(10)
  })
})
