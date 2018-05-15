import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routers from './router'
// import reducer from './reducers'

const defaultCount = {
	count: 0
}

function reducer(state = defaultCount, action) {
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

// const initialState = {}
// const enhancer= {}
// const store = createStore(
// 	reducer, initialState, enhancer
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(reducer)
const element = document.getElementById('app')

const App = () => (
	<Provider store={store}>
		<Routers />
	</Provider>
)

ReactDom.render(<App/>, element)