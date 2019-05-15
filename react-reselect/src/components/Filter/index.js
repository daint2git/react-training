import React from 'react'

const Filter = ({ conditions, onFilter }) => {
  const handleChange = e => {
    onFilter({ ...conditions, [e.target.id]: e.target.checked })
  }

  return (
    <div>
      <label htmlFor="finished">
        <input
          type="checkbox"
          id="finished"
          checked={conditions.finished}
          onChange={handleChange}
        />
        finished
      </label>
      <label htmlFor="unfinished">
        <input
          type="checkbox"
          id="unfinished"
          checked={conditions.unfinished}
          onChange={handleChange}
        />
        unfinished
      </label>
    </div>
  )
}

export default React.memo(Filter)
