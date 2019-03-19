import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'reactstrap'
import styles from './stories.scss'

const Wrapper = props => <div className={styles.wrapper} {...props} />

storiesOf('Button', module)
  .add('default', () => <Button>Hello Button</Button>)
  .add('Color', () => (
    <Wrapper>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="info">info</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <Button color="link">link</Button>
    </Wrapper>
  ))
  .add('outline', () => (
    <Wrapper>
      <Button outline color="primary">
        primary
      </Button>
      <Button outline color="secondary">
        secondary
      </Button>
      <Button outline color="success">
        success
      </Button>
      <Button outline color="info">
        info
      </Button>
      <Button outline color="warning">
        warning
      </Button>
      <Button outline color="danger">
        danger
      </Button>
    </Wrapper>
  ))
  .add('size', () => (
    <Wrapper>
      <Button color="primary" size="lg">
        Large Button
      </Button>
      <Button color="secondary" size="lg">
        Large Button
      </Button>
      <Button color="primary" size="sm">
        Small Button
      </Button>
      <Button color="secondary" size="sm">
        Small Button
      </Button>
      <Button color="primary" size="lg" block>
        Block level button
      </Button>
      <Button color="secondary" size="lg" block>
        Block level button
      </Button>
    </Wrapper>
  ))
  .add('Active State', () => (
    <Wrapper>
      <Button color="primary" size="lg" active>
        Primary link
      </Button>
      <Button color="secondary" size="lg" active>
        Link
      </Button>
    </Wrapper>
  ))
  .add('Disabled State', () => (
    <Wrapper>
      <Button color="primary" size="lg" disabled>
        Primary button
      </Button>
      <Button color="secondary" size="lg" disabled>
        Button
      </Button>
    </Wrapper>
  ))
