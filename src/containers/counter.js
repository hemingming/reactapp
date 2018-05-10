/*
 * containers
 * VisibleTodoList.js
 */
import React from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from '../actions'
import Counter from '../components/reduxcounter/counter'


const mapStateToProps = state => ({
    value: state.count
})

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(incrementAction),
    onDecrement: () => dispatch(decrementAction)
  })


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)