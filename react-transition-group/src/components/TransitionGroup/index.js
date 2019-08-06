import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './styles.css'

const DEFAULT_ITEMS = [{ id: 1, text: 'A' }, { id: 2, text: 'B' }, { id: 3, text: 'C' }]

const Component = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS)
  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          const text = prompt('Enter some text') // eslint-disable-line
          if (text) {
            setItems(items => [...items, { id: Math.random(), text }])
          }
        }}
      >
        Add Item
      </button>
      <TransitionGroup component="section" className="todo-list">
        {items.map(({ id, text }) => (
          <CSSTransition key={id} timeout={500} classNames="item-css-transition">
            <div className="item">
              <button
                type="button"
                className="remove-btn"
                onClick={() => setItems(items => items.filter(item => item.id !== id))}
              >
                &times;
              </button>
              {text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default Component
