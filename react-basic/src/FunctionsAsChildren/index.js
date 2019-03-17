import React from 'react'

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = []
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return <div className="a">{items}</div>
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {index => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  )
}

export default ListOfTenThings
