import React from 'react'

const createMarkup = () => ({ __html: 'First &middot; Second' })

const MyComponent = () => <div dangerouslySetInnerHTML={createMarkup()} />

export default MyComponent
