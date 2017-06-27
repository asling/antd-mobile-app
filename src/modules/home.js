import React,{ Component } from 'react';
import history from '../history';
import { Carousel, WingBlank, Flex, WhiteSpace, Icon, List } from 'antd-mobile';
import './home.scss';
const ListItem = List.Item;
export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[],
			initialHeight:200
		}
		this.toProject = this.toProject.bind(this);
	}

	componentDidMount() {
	    // simulate img loading
	    //document.body.addEvent
	    setTimeout(() => {
	      this.setState({
	        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      });
	    }, 100);
	}

	toProject(str){
		history.push(`/project/${str}`);
	}

	render(){
		const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
		return (
			<div>
				<Carousel
					className="my-carousel"
			        autoplay={false}
			        infinite
			        selectedIndex={1}
			        swipeSpeed={35}
			    >
			    	{this.state.data.map(ii => (
			            <a href="http://www.baidu.com" key={ii} style={hProp}>
			              <img style={{width:'100%'}}
			                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
			                alt="icon"
			                onLoad={() => {
			                  // fire window resize event to change height
			                  window.dispatchEvent(new Event('resize'));
			                  this.setState({
			                    initialHeight: null,
			                  });
			                }}
			              />
			            </a>
			         ))}
			    </Carousel>
			    <div style={{backgroundColor:'#fff'}}>	
			    	<WhiteSpace size="md" />
				    <Flex justify="center">
				    	<Flex.Item><WingBlank size='sm'><div style={{textAlign:'right'}}><Icon type={require('../icons/user-home-page/money.svg')} size="xxs" />&nbsp;千亿国资基金发起</div></WingBlank></Flex.Item>
				    	<Flex.Item><WingBlank size='sm'><span>两位国家领导人接见</span></WingBlank></Flex.Item>
				    </Flex>
				    <WhiteSpace size="md" />
				    <Flex>
				    	<Flex.Item><WingBlank size='sm'><div style={{color:'#888',fontSize:'14px',textAlign:'right'}}>成交额超过<span>240亿</span></div></WingBlank></Flex.Item>
				    	<Flex.Item><WingBlank size='sm'><div style={{color:'#888',fontSize:'14px'}}>中国互金稳健三强</div></WingBlank></Flex.Item>
				    </Flex>
				    <WhiteSpace size="md" />
				    <div style={{color:'#888',fontSize:12,textAlign:'center'}}><Icon type={require('../icons/self/shell.svg')} size="xxs" />&nbsp;账户资金由浙商银行存管</div>
				    <WhiteSpace size="md" />
				</div>

				<List renderHeader={() => {
					return <div className="list-title"><i></i>转让市场</div>
				}} className="my-list">
					<ListItem>
						<a onClick={(e)=>{
							this.toProject('月月丰1');
						}}>
							<WhiteSpace size="md" />
							<div className="list-head"><span className="productType">月月丰</span>&nbsp;2017059020394号</div>
							<WhiteSpace size="md" />
							<Flex>
								<Flex.Item>
									<div className="orange size14"><span className="size24">7.76</span>&nbsp;%</div>

								</Flex.Item>
								<Flex.Item><div className="black size14"><span className="size24">64</span>&nbsp;天</div></Flex.Item>
								<div className="progress c-blue">
									<div className="pro1"></div>
									<div className="pro2"></div>
									<div className="pro-num">91.04%</div>
								</div>

							</Flex>
							<div className="rate-tip">预期年化收益率</div>
							<WhiteSpace size="md" />
							<Flex>
								<Flex.Item>
									<div className="invest-line" style={{textAlign:'left'}}>1000元起投</div>
								</Flex.Item>
								<Flex.Item>
									<div className="invest-diff" style={{textAlign:'right'}}>剩余3,485元/50万</div>
								</Flex.Item>
							</Flex>
						</a>
					</ListItem>
					<ListItem>
						<a onClick={(e)=>{
							this.toProject('月月丰2');
						}}>
							<WhiteSpace size="md" />
							<div className="list-head"><span className="productType">月月丰</span>&nbsp;2017059020394号</div>
							<WhiteSpace size="md" />
							<Flex>
								<Flex.Item>
									<div className="orange size14"><span className="size24">7.76</span>&nbsp;%</div>

								</Flex.Item>
								<Flex.Item><div className="black size14"><span className="size24">64</span>&nbsp;天</div></Flex.Item>
								<div className="progress c-blue">
									<div className="pro1"></div>
									<div className="pro2"></div>
									<div className="pro-num">91.04%</div>
								</div>

							</Flex>
							<div className="rate-tip">预期年化收益率</div>
							<WhiteSpace size="md" />
							<Flex>
								<Flex.Item>
									<div className="invest-line" style={{textAlign:'left'}}>1000元起投</div>
								</Flex.Item>
								<Flex.Item>
									<div className="invest-diff" style={{textAlign:'right'}}>剩余3,485元/50万</div>
								</Flex.Item>
							</Flex>
						</a>
					</ListItem>
					<ListItem>
						<a onClick={(e)=>{
							this.toProject('月月丰3');
						}}>
							<WhiteSpace size="md" />
							<div className="list-head"><span className="productType">月月丰</span>&nbsp;2017059020394号</div>
							<WhiteSpace size="md" />
							<Flex>
								<Flex.Item>
									<div className="orange size14"><span className="size24">7.76</span>&nbsp;%</div>

								</Flex.Item>
								<Flex.Item><div className="black size14"><span className="size24">64</span>&nbsp;天</div></Flex.Item>
								<div className="progress c-blue">
									<div className="pro1"></div>
									<div className="pro2"></div>
									<div className="pro-num">91.04%</div>
								</div>

							</Flex>
							<div className="rate-tip">预期年化收益率</div>
							<WhiteSpace size="md" />
							<Flex>
								<Flex.Item>
									<div className="invest-line" style={{textAlign:'left'}}>1000元起投</div>
								</Flex.Item>
								<Flex.Item>
									<div className="invest-diff" style={{textAlign:'right'}}>剩余3,485元/50万</div>
								</Flex.Item>
							</Flex>
						</a>
					</ListItem>
				</List>
			</div>
		)
	}
}