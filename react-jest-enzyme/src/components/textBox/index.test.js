import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import TextBox from './'

describe('TextBox', () => {
  test('matches the snapshot', () => {
    const wrapper = shallow(<TextBox />)
    expect(wrapper).toMatchSnapshot()
  })

  test('onChange handle', () => {
    const props = {
      value: '',
      onChange: jest.fn(),
    }
    const wrapper = shallow(<TextBox {...props} />)
    const input = wrapper.find('input[type="text"]')
    expect(input.props().value).toBe('')
    // input.simulate('change', { target: { value: 'Hello' } })
    // expect(props.onChange).toHaveBeenCalled()
    // expect(props.onChange).toHaveBeenCalledWith({ target: { value: 'Hello' } })
    // wrapper.update()
    // const input2 = wrapper.find('input[type="text"]')
    // console.log(input2.props())
    // expect(wrapper.find('input[type="text"]').text()).toBe('hello')
  })
})
