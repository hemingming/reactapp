import React from 'react'
import './hello.styl'
import protrait from '../../../static/images/logo.svg'
import axios from 'axios'

const url = 'http://suggest.taobao.com/sug?code=utf-8&q=卫衣&callback=cb'


class Hello extends React.Component {
	constructor(props) {
		super(props)
	}
	shouldComponentUpdate(nextProps, nextState) {
	    return this.props.value !== nextProps.value;
	}
	get() {
        axios.get('/doubanapi/v0/movie/list?page=1&size=6').then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err.status);
        })
		/*	    
		fetch('/doubanapi/v0/movie/list?page=1&size=6').then(res => {
	        return res.json();
	    }).then(res => {
	        console.log(res);
	    })*/
	}



	render() {
		return (
			<div>
				hello.js
				<img className="logo" src={protrait}/>
				<h1 className="App-title">Welcome to React ...</h1>
				<input type="button" value="GET" onClick={this.get}/>
			</div>
		)	
	}
}

export default Hello