import Link from '../'

describe('Link', () => {
  test('using react-test-renderer', () => {
    const component = renderer.create(<Link url="http://www.facebook.com">Facebook</Link>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseEnter()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseLeave()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('using shallow', () => {
    const wrapper = shallow(<Link url="http://www.facebook.com">Facebook</Link>)

    expect(wrapper).toMatchSnapshot()
  })

  test('using mount', () => {
    const wrapper = mount(<Link url="http://www.facebook.com">Facebook</Link>)

    expect(wrapper).toMatchSnapshot()
  })

  test('using render', () => {
    const wrapper = render(<Link url="http://www.facebook.com">Facebook</Link>)

    expect(wrapper).toMatchSnapshot()
  })
})
