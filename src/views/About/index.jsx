import React from 'react'
import ReactDom from 'react-dom'
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

const About = () => (
  <div>
    <h3>About</h3>
    <Hello/>
  </div>
)

export default About