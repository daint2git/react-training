import React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS, isObservableArray } from 'mobx'
import BirdForm from '@components/BirdForm'
import BirdList from '@components/BirdList'

@inject('BirdStore')
@observer
class BirdView extends React.Component {
  render() {
    const {
      BirdStore: { birds, birdCount, addBird },
    } = this.props
    console.log(birds)
    console.log(isObservableArray(birds))
    // Recursively converts an (observable) object to a javascript structure.
    console.log(toJS(birds))
    console.log(isObservableArray(toJS(birds)))

    return (
      <div>
        <h2>Birds</h2>
        <BirdForm addBird={addBird} />
        <BirdList birds={birds} birdCount={birdCount} />
      </div>
    )
  }
}

export default BirdView
