import ButtonGroup from '..'

describe('ButtonGroup', () => {
  const list = [1, 2]
  test('using shallow', () => {
    const shallowed = shallow(<ButtonGroup list={list} />)

    expect(shallowed).toMatchSnapshot()
  })

  test('using mount', () => {
    const mounted = mount(<ButtonGroup list={list} />)

    expect(mounted).toMatchSnapshot()
    mounted.unmount()
  })

  test('using render', () => {
    const rendered = render(<ButtonGroup list={list} />)

    expect(rendered).toMatchSnapshot()
  })

  test('using react-test-renderer', () => {
    const tree = renderer.create(<ButtonGroup list={list} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('button clicked', () => {
    const callBack = jest.fn()
    const list = ['btn1', 'btn2']
    const wrapper = shallow(<ButtonGroup list={list} onClick={callBack} />)

    const btns = wrapper.find('Button')
    expect(btns.length).toBe(2)

    const btn1 = btns.first()
    btn1.simulate('click')
    expect(callBack).toHaveBeenCalled()
    expect(callBack).toHaveBeenCalledTimes(1)
    expect(callBack).toHaveBeenCalledWith('btn1')

    const btn2 = btns.at(1)
    btn2.simulate('click')
    expect(callBack).toHaveBeenCalled()
    expect(callBack).toHaveBeenCalledTimes(2)
    expect(callBack).toHaveBeenCalledWith('btn2')
  })

  test('props', () => {
    const callBack = jest.fn()
    const wrapper = mount(<ButtonGroup list={list} onClick={callBack} />)
  })
})
