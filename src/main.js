import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './views/Home/index.jsx'
import About from './views/About/index.jsx'



ReactDom.render(
	(<HashRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</Switch>
	</HashRouter>),
	document.getElementById('app')
)