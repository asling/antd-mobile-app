import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './modules/layout';
import Home from './modules/home';
import Project from './modules/project';
import Koubei from './modules/koubei';
import Friend from './modules/friend';
import Live from './modules/live';
import My from './modules/my';

export default class Routes extends Component{
	render(){
		return (
			<div>
			<Route path="/" component={Layout}/>
			<Route path="/home" component={Home}/>
			<Route path="/koubei" component={Koubei}/>
			<Route path="/friend" component={Friend}/>
			<Route path="/live" component={Live}/>
			<Route path="/my" component={My}/>
			<Route path="/project/:id" component={Project} />
			</div>
		)
	}
}

