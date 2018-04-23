import React from 'react'
import './hello.styl'
import protrait from '../../../static/logo.svg'

class Hello extends React.Component {
	render() {
		return (
			<div>
				<img class="logo" src={protrait}/>
				<h1 className="App-title">Welcome to React ...</h1>
			</div>
		)	
	}
}

export default Hello