import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import List from './'

describe('List', () => {
  const data = ['Email 1', 'Email 2', 'Email 3']
  test('Snapshot', () => {
    const component = renderer.create(<List />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Snapshot with data', () => {
    const component = renderer.create(<List data={data} />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })

  describe('data', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<List data={data} />)
    })

    it('List renders table', () => {
      expect(wrapper.find('table').length).toEqual(1)
    })

    it('Class of rendered table', () => {
      expect(wrapper.find('table').hasClass('myClass')).toEqual(true)
    })

    it('List renders column', () => {
      const arr = wrapper.find('th')
      expect(arr.length).toEqual(1)
      expect(arr.first().text()).toEqual('Email')
    })

    it('List renders data', () => {
      const arr = wrapper.find('td')
      expect(arr.length).toEqual(3)
      expect(arr.at(0).text()).toEqual('Email 1')
      expect(arr.at(1).text()).toEqual('Email 2')
      expect(arr.at(2).text()).toEqual('Email 3')
    })
  })
})
