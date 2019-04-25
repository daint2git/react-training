import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import Form2 from './'

describe('Form2', () => {
  describe('Snapshot', () => {
    test('1. renderer', () => {
      const component = renderer.create(<Form2 />)
      const json = component.toJSON()
      expect(json).toMatchSnapshot()
    })

    test('2. shallow', () => {
      const wrapper = shallow(<Form2 />)
      expect(wrapper).toMatchSnapshot()
    })

    test('3. mount', () => {
      const wrapper = mount(<Form2 />)
      expect(wrapper).toMatchSnapshot()
    })

    test('4. render', () => {
      const wrapper = render(<Form2 />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
