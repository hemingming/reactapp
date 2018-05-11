/*
 * components
 * Todo.js
 */

import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
<<<<<<< HEAD
  <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
=======
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
>>>>>>> 58d83dfd94a5e5272ffc663a4e5fa07cd54fc972
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
