import React from 'react'

function BirdList({ birds, birdCount }) {
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
}

export default React.memo(BirdList)
