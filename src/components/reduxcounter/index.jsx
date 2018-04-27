import React from 'react'
import { connect } from 'react-redux'

class ReduxCounter extends React.Component {
	// state = { count: 0 }

	constructor(props){
		super(props)
		this.state = { 
			// count: 0 
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}

	increment() {
		this.props.dispatch({ type: 'INCREMENT' })
	}

	decrement() {
		this.props.dispatch({ type: 'DECREMENT' })
	}

	render() {
		return (
			<div>
				<h2>Redux Counter</h2>
				<button onClick = {this.decrement}> - </button>
				<span>{this.props.count}</span>
				<button onClick = {this.increment}> + </button>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		count: state.count
	};
}

// export default reduxCounter
export default connect(mapStateToProps)(ReduxCounter)