# Higher-Order Components (HOC)

## What is Higher-Order Components
- là một hàm nhận một component làm đối số và trả về một component mới.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent)

WrappedComponent => EnhancedComponent

// WrappedComponent  : là React.Component được bao bọc
// EnhancedComponent : là React.Component được trả về

// simple HoC implementation example
function simpleHoC(WrappedComponent) {
  return class Simple extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
```

## What can you do with HOC ?
HOC cho phép bạn:
- Code reuse, abstraction of logic and bootstrap
- Render Hijacking (Rendering / Hijacking)
- State abstraction and operation
- Props operation

## Patterns
- Props Proxy: HOC điều khiển các props được truyền cho WrappedComponent
- Inheritance Inversion: HOC kế thừa WrappedComponent

### Props Proxy

#### What is Props Proxy ?
```js
// Props Proxy có thể dễ dàng thực hiện như sau
function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

// Điều này bằng với
React.createElement (WrappedComponent, this.props, null)
```
- Điều quan trọng ở đây là phương thức render HOC trả về một React Element kiểu WrappedComponent.
- Chúng ta đưa props được nhận bởi HOC như nó đang có, điều này được gọi là Props Proxy.

### What can Pros Proxy do ?
- Prop operation
- Access to instances via reference
- Abstraction of State
- Wrap a WrappedComponent with another element

### Inheritance Inversion
```js
// Inheritance Inversion có thể dễ dàng thực hiện như sau
function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
  }
}
```
- Component mới được kế thừa từ WrappedComponent.
- WrappedComponent không kế thừa lợp Enhancer, nó được Enhancer kế thừa nó, điều này được gọi là Inheritance Inversion.

### What can Pros Proxy do ?
- Render Hijacking
- Operation of State

#### Render Hijacking
- Điều này được gọi là Render Hijacking vì HOC có thể kiểm soát tất cả kết quả hiển thị của WrappedComponent.
- Với Render Hijacking, bạn có thể:
  - For every React Element output by render , read / add / change / erase props
  - Reading and modifying the React Element tree output by render
  - Display of element tree according to conditions
  - Wrapping a tree of elements for styling purposes (like Props Proxy)

## Naming
```js
const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component'

// HOC return class component
function withHOC(WrappedComponent) {
  return class WithHOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
    static displayName = `withHOC(${getDisplayName(WrappedComponent)})`
  }
}

// HOC return functional component
const withHOC = WrappedComponent => {
  const WithHOC = props => <WrappedComponent {...props} />
  WithHOC.displayName = `withHOC(${getDisplayName(WrappedComponent)})`
  return Simple
}

```

## HOC with parameters
```js
function HOCFactoryFactory(...params) {
  // do something with params
  return function HOCFactory(WrappedComponent) {
    return class HOC extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}

const HOCFactoryFactory = (...params) => {
  // do something with params
  const HOCFactory = WrappedComponent => {
    const HOC = props => <WrappedComponent {...props} />
    return HOC
  }
  return HOCFactory
}

const HOCFactoryFactory = (...params) => WrappedComponent => {
  // do something with params
  const HOC = props => <WrappedComponent {...props} />
  return HOC
}
```