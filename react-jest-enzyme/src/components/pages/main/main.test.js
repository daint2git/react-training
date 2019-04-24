import React from 'react'
import { mount } from 'enzyme'
import Main from './main'

describe('Main', () => {
  describe('selectors', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<Main />)
    })

    test('has a main tag', () => {
      const mainTags = wrapper.find('main')
      expect(mainTags).toHaveLength(1)
    })
  })
})
