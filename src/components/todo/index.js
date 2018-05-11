/*
 * components
 * index.js
 */

import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

const App = () => (
    <div>
        <Link to="/">Home</Link>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
