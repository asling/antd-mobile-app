import React,{Component} from 'react';
import history from '../history';
import { NavBar, Icon } from 'antd-mobile';
import './project.scss';

export default class Project extends Component{
	constructor(props){
		super(props);
		console.log('props',props);
		this.title = props.match.params.id;
	}

	render(){
		return (
			<div>
				<NavBar leftContent="back"
			      mode="light"
			      onLeftClick={() => history.goBack()}
			    >{this.title}</NavBar>
			</div>
		)
	}
}