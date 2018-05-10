import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
import Hello from '../../components/hello'

const Home = () => (
	<div>
		<Link to="/about">About</Link><br/>
		<Link to="/reduces">reduces</Link><br/>
		<Hello/>
	</div>
)

export default Home