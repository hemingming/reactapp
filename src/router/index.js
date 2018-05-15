/*
 * react router : Ming
 */
 
import React, { Component } from 'react'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Reduces from '../components/todo'

const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/reduces" component={Reduces} />
		</Switch>
	</Router>
)
export default Routers