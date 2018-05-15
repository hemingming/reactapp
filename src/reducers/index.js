/*
 * redux @ reducer
 * index.js
 */


import { combineReducers } from 'redux'
import Counters from './counter'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


export default combineReducers({
  todos,
  visibilityFilter,
  Counters
})
