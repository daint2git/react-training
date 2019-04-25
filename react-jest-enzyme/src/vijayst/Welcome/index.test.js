import renderer from 'react-test-renderer'
import Welcome from './'

describe('Welcome', () => {
  test('Snapshot', () => {
    const component = renderer.create(<Welcome />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Welcome renders "Hello world"', () => {
    const welcome = shallow(<Welcome />)
    expect(welcome.find('div').text()).toEqual('Hello world')
  })
})
