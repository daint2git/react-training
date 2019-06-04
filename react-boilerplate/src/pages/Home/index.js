import React from 'react'
import classnames from 'classnames/bind'
// import { useTranslation } from 'react-i18next'
import { Button } from 'reactstrap'
import Select from 'react-select'

// import reactLogo from 'svgs/react-logo.svg'
// import reduxLogo from 'svgs/redux-logo.svg'

import styles from './styles.scss'

const cx = classnames.bind(styles)

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

class SelectDemo extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption)
  }

  render() {
    const { selectedOption } = this.state

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        classNamePrefix={cx('react-select-test')}
      />
    )
  }
}

const Home = () => {
  // const { t } = useTranslation()

  return (
    // <div className={cx('root')}>
    //   <div className={cx('header')}>
    //     <h1 className={cx('title')}>{t('title')}</h1>
    //     <img className={cx('logo')} src={reactLogo} alt="react-logo" />
    //     <img className={cx('logo')} src={reduxLogo} alt="redux-logo" />
    //   </div>
    // </div>
    <>
      <div className="container">
        <Button color="primary">primary</Button> <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button> <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button> <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
      <div className="container-fluid">
        <Button color="primary">primary</Button> <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button> <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button> <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
      <SelectDemo />
    </>
  )
}

export default Home
