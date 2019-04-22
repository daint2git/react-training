import React from 'react'
import { mount } from 'enzyme'
import Header from '../header'

describe('Header', () => {
  describe('selectors', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<Header />)
    })
    test('has a header tag', () => {
      const headerTags = wrapper.find('header')
      expect(headerTags).toHaveLength(1)
    })

    test('has a title class', () => {
      const h2Tags = wrapper.find('h2')
      expect(h2Tags.hasClass('title')).toBeTruthy()
    })

    test('match text in h2 tag', () => {
      const h2Tags = wrapper.find('h2')
      expect(h2Tags).toHaveLength(1)
      expect(h2Tags.text()).toEqual('Header, here')
    })
  })

  describe('data (props, state)', () => {
    test('props', () => {
      const props = {
        user: {
          name: 'Dai',
          age: 26,
          carrer: 'developer',
        },
        message: {
          title: 'message title',
          content: 'message content',
        },
      }
      const wrapper = mount(<Header {...props} />)
      expect(wrapper.props()).toEqual(props)
    })
  })
})
