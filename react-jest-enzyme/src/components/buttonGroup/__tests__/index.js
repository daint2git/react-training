import ButtonGroup from '../'

describe('ButtonGroup', () => {
  test('using shallow', () => {
    const shallowed = shallow(<ButtonGroup />)

    expect(shallowed).toMatchSnapshot()
  })

  test('using mount', () => {
    const mounted = mount(<ButtonGroup />)

    expect(mounted).toMatchSnapshot()
  })

  test('using render', () => {
    const rendered = render(<ButtonGroup />)

    expect(rendered).toMatchSnapshot()
  })

  test('using react-test-renderer', () => {
    const tree = renderer.create(<ButtonGroup />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
