import {TabBar, Icon } from 'antd-mobile';
import React,{ Component } from 'react';

import Live from './live';
import Koubei from './koubei';
import Friend from './friend';
import My from './my';

const TabItem = TabBar.Item;

export default class Layout extends Component{
	constructor(props){
		super(props);
		this.state = {
			selected: 'redTab',
			hidden: false,
		}
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
					title="live"
					key="live"
					icon={<div style={{
						width: '0.44rem',
						height: '0.44rem',
						background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat'
					}}></div>}
					selectedIcon={<div style={{
						width: '0.44rem',
						height: '0.44rem',
						background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center / 0.42rem 0.42rem no-repeat'
					}}></div>}
					selected={this.state.selectedTab === 'blueTab'}
					badge={1}
					onPress={()=>{
						this.setState({
							selectedTab : 'blueTab'
						})
					}}
					data-seed="logId"
					>
						<Live />
					</TabItem>

					<TabItem
						title="口碑"
						key="口碑"
						badge={'new'}
						selected={this.state.selectedTab === 'redTab'}
						onPress={()=>{
							this.setState({
								selectedTab: 'redTab'
							});
						}}
						icon={<Icon type="koubei-o" size="md" />}
						selectedIcon={<Icon type="koubei" size="md" />}
						data-seed="logId1"

					>
						<Koubei />
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
							this.setState({
								selectedTab: 'greenTab',
							});
						}}
					>
						<Friend />
					</TabItem>
					<TabItem
						icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
						selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
						title= '我的'
						key='我的'
						selected={this.state.selectedTab === 'yellowTab'}
						onPress={()=>{
							this.setState({
								selectedTab : 'yellowTab'
							});
						}}
					>
						<My />
					</TabItem>
				</TabBar>

		)
	}
}
