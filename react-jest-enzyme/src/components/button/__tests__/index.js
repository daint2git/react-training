import 'jest-styled-components'
import Button from '../'

describe('Button', () => {
  test('converts basic button using shallow', () => {
    const shallowed = shallow(
      <Button className="class">
        <strong>Hello!</strong>
      </Button>,
    )

    expect(shallowed).toMatchSnapshot()
  })

  test('converts basic button using mount', () => {
    const mounted = mount(
      <Button className="class">
        <strong>Hello!</strong>
      </Button>,
    )

    expect(mounted).toMatchSnapshot()
    mounted.unmount()
  })

  test('converts basic button using render', () => {
    const rendered = render(
      <Button className="class">
        <strong>Hello!</strong>
      </Button>,
    )

    expect(rendered).toMatchSnapshot()
  })

  test('converts basic button using react-test-renderer', () => {
    const tree = renderer
      .create(
        <Button className="class">
          <strong>Hello!</strong>
        </Button>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
