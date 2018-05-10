/*
 * components
 * counter index.js
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Counter = ({ onIncrement, onDecrement, value }) => (
    <div>
        <h2>Redux Counter</h2>
        <button onClick = {onDecrement}> - </button>
        <span>{value}</span>
        <button onClick = {onIncrement}> + </button>
    </div>
)


Counter.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
    
}

export default Counter
