import React from 'react'
import { mount } from 'enzyme'
import NavBar from '../navbar'

describe('NavBar', () => {
  describe('selectors', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<NavBar />)
    })

    test('has a nav tag', () => {
      const navTags = wrapper.find('nav')
      expect(navTags).toHaveLength(1)
    })

    test('has a ul tag', () => {
      const ulTags = wrapper.find('ul')
      expect(ulTags).toHaveLength(1)
    })
  })

  describe('data (props, state)', () => {
    const props = {
      data: [
        {
          url: '/a',
          children: 'A Link',
        },
        {
          url: '/b',
          children: 'B Link',
        },
        {
          url: '/c',
          children: 'C Link',
        },
      ],
    }
    let wrapper

    beforeEach(() => {
      wrapper = mount(<NavBar {...props} />)
    })

    test('props', () => {
      expect(wrapper.props()).toEqual(props)
    })

    test('has 3 li tags', () => {
      const liTags = wrapper.find('li')
      expect(liTags).toHaveLength(3)
    })
  })
})
