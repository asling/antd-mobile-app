import {TabBar, Icon } from 'antd-mobile';
import React,{ Component } from 'react';
import history from '../history';

import Home from './home';
import Koubei from './koubei';
import Friend from './friend';
import My from './my';
const TabItem = TabBar.Item;

export default class Layout extends Component{
	constructor(props){
		super(props);
		this.state = {
			selectedTab: 'blueTab',
			hidden: false,
		};
		console.log(1111);
		console.log(history);
	}

	componentDidMount(){
		history.push('/home');
	}

	render(){
		return (
			<TabBar 
				unselectedTintColor="#949494"
				tintColor="#33a3f4"
				barTintColor="white"
				hidden={this.state.hidden}
			>
				<TabItem 
					title="首页"
					key="首页"
					icon={<Icon type={require('!svg-sprite-loader!../icons/tab-bar/money.svg')} size="md" />}
					selectedIcon={<Icon type={require('!svg-sprite-loader!../icons/tab-bar/money-o.svg')} size="md" />}
					selected={this.state.selectedTab === 'blueTab'}
					onPress={()=>{
						history.push('/home');
						this.setState({
								selectedTab: 'blueTab'
						});
					}}
					data-seed="logId"
					>
					</TabItem>

					<TabItem
						title="口碑"
						key="口碑"
						badge={'new'}
						selected={this.state.selectedTab === 'redTab'}
						onPress={()=>{
							history.push('/koubei');
							this.setState({
								selectedTab: 'redTab'
							});
						}}
						icon={<Icon type="koubei-o" size="md" />}
						selectedIcon={<Icon type="koubei" size="md" />}
						data-seed="logId1"

					>
					</TabItem>
					<TabItem
						icon={<div style={{
							width: '0.44rem',
							height: '0.44rem',
							background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center / 0.42rem 0.42rem no-repeat'
						}} />}
						selectedIcon={<div style={{
							width: '0.44rem',
							height: '0.44rem',
							background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center / 0.42rem 0.42rem no-repeat'
						}} />}
						title="friend"
						key="friend"
						dot
						selected={this.state.selectedTab === 'greenTab'}
						onPress={()=>{
							history.push('/friend');
							this.setState({
								selectedTab: 'greenTab',
							});
						}}
					>
					</TabItem>
					<TabItem
						icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
						selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
						title= '我的'
						key='我的'
						selected={this.state.selectedTab === 'yellowTab'}
						onPress={()=>{
							history.push('/my');
							this.setState({
								selectedTab : 'yellowTab'
							});
						}}
					>
					</TabItem>
				</TabBar>

		)
	}
}
