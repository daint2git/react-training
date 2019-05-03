import React from 'react'

const BirdList = React.memo(props => {
  const { birds, birdCount } = props
  return (
    <div>
      <ul>
        {birds.map(bird => (
          <li key={bird.id}>
            {bird.name} - {bird.color}
          </li>
        ))}
      </ul>
      <p>Have {birdCount} birds.</p>
    </div>
  )
})

export default BirdList
