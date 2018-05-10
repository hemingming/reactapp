/*
 * redux @ reducer
 * index.js
 */


import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import Counter from './counter'

export default combineReducers({
  todos,
  visibilityFilter,
  Counter
})
