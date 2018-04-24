/*
 * Router-Dom React
 */
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../views/Home/index.jsx'
import About from '../views/About/index.jsx'

const rootReact = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      {this.props.children}
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)
export default rootReact
