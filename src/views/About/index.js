import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
import protrait from '../../../static/images/redux.png'
import Counters from '../../components/counter'
import ReduxCounter from '../../containers/counter'


const About = () => (
  <div>
  	<Link to="/">Home</Link>
    <h3> About rudex action </h3>
    <img src={protrait} />
    <Counters/>
    <ReduxCounter />
  </div>
)

export default About