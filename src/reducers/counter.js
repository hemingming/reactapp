/*
 * reducers
 * counter.js
 */

/*
const defaultState = {
	count: 0
}

const counters = (state = defaultState, action) => {
	const count = state.count
	switch (action.type) {
		case 'INCREMENT':
		  return { count: count + 1 }
		case 'DECREMENT':
		  return { count: count - 1 }
		default:
		  return state
	  }
}
*/

const Counter = (state = {count : 0}, action) => {
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

export default Counter
