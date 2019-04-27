import CssModulesAndFileMockExample from './'

describe('CssModulesAndFileMockExample', () => {
  test('1. shallow', () => {
    const wrapper = shallow(<CssModulesAndFileMockExample />)
    expect(wrapper).toMatchSnapshot()
  })

  test('2. mount', () => {
    const wrapper = mount(<CssModulesAndFileMockExample />)
    expect(wrapper).toMatchSnapshot()
  })

  test('3. render', () => {
    const wrapper = mount(<CssModulesAndFileMockExample />)
    expect(wrapper).toMatchSnapshot()
  })

  test('4. renderer', () => {
    const wrapper = renderer.create(<CssModulesAndFileMockExample />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
