import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import FormAndList from './'

describe('FormAndList', () => {
  describe('Snapshot', () => {
    test('1. renderer', () => {
      const component = renderer.create(<FormAndList />)
      const json = component.toJSON()
      expect(json).toMatchSnapshot()
    })

    test('2. shallow', () => {
      const wrapper = shallow(<FormAndList />)
      expect(wrapper).toMatchSnapshot()
    })

    test('3. mount', () => {
      const wrapper = mount(<FormAndList />)
      expect(wrapper).toMatchSnapshot()
    })

    test('4. mount (executed render method)', () => {
      const wrapper = mount(<FormAndList />)
      expect(wrapper.render()).toMatchSnapshot()
    })

    test('5. render', () => {
      const wrapper = render(<FormAndList />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('structure and behavior', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<FormAndList />)
    })

    test('FormAndList renders nested components', () => {
      expect(wrapper.find('Form2').length).toEqual(1)
      expect(wrapper.find('List').length).toEqual(1)
    })

    test('onAdd updates List', () => {
      const inputValue = 'Email 1'
      const form = wrapper.find('Form2').first()
      expect(wrapper).toMatchSnapshot()
      form.props().onAdd(inputValue)
      expect(wrapper).toMatchSnapshot()
      const list = wrapper.find('List').first()
      const data = list.props().data
      expect(data.length).toEqual(1)
      expect(data[0]).toEqual(inputValue)
    })
  })
})
