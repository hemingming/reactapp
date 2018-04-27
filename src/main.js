import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './views/Home/index.jsx'
import About from './views/About/index.jsx'
import { Provider } from 'react-redux';
import { createStore } from 'redux'


const defaultState = {
	count: 0
}

function reducer(state = defaultState, action) {
	switch(action.type) {
		case 'INCREMENT':
		return {
			count: state.count + 1
		};
		case 'DECREMENT':
		return {
			count: state.count - 1
		};
		default:
		return state;
	}
}

const store = createStore(reducer)
const element = document.getElementById('app')

const App = () => (
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch>
		</HashRouter>
	</Provider>
)

ReactDom.render(<App/>, element)