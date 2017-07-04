import React,{Component} from 'react';
import history from '../history';
import { NavBar, Icon, WhiteSpace, Flex, WingBlank, List } from 'antd-mobile';
import './project.scss';

const FlexItem = Flex.Item;
const ListItem = List.Item;

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
			    <div>
			    	<div>月月升</div><div>ZT20170626023</div>
			    	<WhiteSpace size="md" />
			    	<Flex>
			    		<FlexItem>
			    			<div>7.0%~8.5%</div><span>预期年化收益率</span>
			    		</FlexItem>
			    		<FlexItem>
			    			锁定服务期<span>30</span>天
			    		</FlexItem>
			    	</Flex>
			    	<WhiteSpace size="md" />
			    	<Flex>
			    		<FlexItem>
			    			<div>1000.00元起投</div>
			    		</FlexItem>
			    		<FlexItem>
			    			剩余0元/50万
			    		</FlexItem>
			    	</Flex>
			    	<ul>
			    		<li><Icon type={require('../icons/self/tips.svg')} />加入1个工作日后起息，锁定服务期后收益率按月递增</li>
			    		<li><Icon type={require('../icons/self/tips.svg')} />起息30天后可随时申请退出，未退出仍继续增加收益</li>
			    		<li><Icon type={require('../icons/self/tips.svg')} />最长持有24个月,到期后自动申请退出</li>
			    	</ul>
			    </div>

			    <div>
			    	<WingBlank sie="lg" />
			    	<Flex>
			    		<FlexItem>
			    			<div>今日加入</div>
			    			<div></div>
			    			<div>2017-06-27</div>
			    		</FlexItem>
			    		<FlexItem>
			    			<div>开始计息</div>
			    			<div></div>
			    			<div>2017-06-27</div>
			    		</FlexItem>
			    		<FlexItem>
			    			<div>可退出</div>
			    			<div></div>
			    			<div>2017-06-27</div>
			    		</FlexItem>
			    	</Flex>
			    </div>

			    <div>
			    	<Flex align="bottom">
			    		<FlexItem>
			    			<div>7.0</div>
			    			<div class="rate"></div>
			    			<div>1</div>
			    		</FlexItem>
			    		<FlexItem>
			    			<div>7.0</div>
			    			<div class="rate"></div>
			    			<div>2</div>
			    		</FlexItem>
			    	</Flex>
			    	<WhiteSpace size="md" />
			    	<div className="">
			    		12个月后收益维持8.5%<span>单位：月</span>
			    	</div>
			    </div>

			    <div>
			    	<List>
			    		<ListItem
			    			arrow="horizontal"
			    			thumb="images" 
			    		>产品说明</ListItem>
			    	</List>
			    </div>

			</div>
		)
	}
}