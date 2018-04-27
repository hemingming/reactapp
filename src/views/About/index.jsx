import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
import { createStore } from 'redux'
import protrait from '../../../static/redux.png'
import Counter from '../../components/counter/index.jsx'
import ReduxCounter from '../../components/reduxcounter/index.jsx'

/*
class Home extends React.Component {
	render() {
		return (
			<Hello/>
		)	
	}
}
*/

/*const defaultState = 0

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
*/




const About = () => (
  <div>
  	<Link to="/">Home</Link>
    <h3> About rudex action </h3>
    <img src={protrait} />
    <Counter/>
    <ReduxCounter/>
  </div>
)

export default About