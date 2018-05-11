/*
 * components
 * Link.js
 */

import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
<<<<<<< HEAD
    <button onClick={onClick} disabled={active} style={{marginLeft: '4px',}}>
        {children}
=======
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
>>>>>>> 58d83dfd94a5e5272ffc663a4e5fa07cd54fc972
    </button>
)

Link.propTypes = {
<<<<<<< HEAD
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
=======
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
>>>>>>> 58d83dfd94a5e5272ffc663a4e5fa07cd54fc972
}

export default Link
