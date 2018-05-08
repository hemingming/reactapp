import React from 'react'

class Counter extends React.Component {
	constructor(props){
		super(props)
		this.state = { 
			count: 0 
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}

	increment() {
		this.setState({
			count: this.state.count + 1
		})
	}

	decrement() {
		this.setState({
			count: this.state.count - 1
		})
	}

	render() {
		return (
			<div>
				<h2>React Counter</h2>
				<button onClick = {this.decrement}> - </button>
				<span>{this.state.count}</span>
				<button onClick = {this.increment}> + </button>
			</div>
		)
	}

}

export default Counter