import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import Hello from '../../components/hello/hello.jsx'

/*
class Home extends React.Component {
	render() {
		return (
			<Hello/>
		)	
	}
}
*/

const defaultState = 0

function counter(state = defaultState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

let store = createStore(counter)

store.subscribe(() => 
	console.log(store, store.getState())
)

function reduxAction() {
	store.dispatch({ type: 'INCREMENT' })
}





const About = () => (
  <div>
    <h3 onClick={reduxAction}> About rudex action </h3>
    <Hello/>
  </div>
)

export default About