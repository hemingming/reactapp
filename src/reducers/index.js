/*
 * redux @ reducer
 * index.js
 */


import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
<<<<<<< HEAD
import Counter from './counter'
=======
import counter from './counter'
>>>>>>> 58d83dfd94a5e5272ffc663a4e5fa07cd54fc972

export default combineReducers({
  todos,
  visibilityFilter,
<<<<<<< HEAD
  Counter
=======
  counter
>>>>>>> 58d83dfd94a5e5272ffc663a4e5fa07cd54fc972
})
