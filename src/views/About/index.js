import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
import { createStore } from 'redux'
import protrait from '../../../static/images/redux.png'
import Counter from '../../components/counter'
import ReduxCounter from '../../components/reduxcounter'


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