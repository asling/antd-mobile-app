import React,{ Component } from 'react';
import { Carousel, WingBlank, Flex, WhiteSpace } from 'antd-mobile';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[],
			initialHeight:200
		}
	}

	componentDidMount() {
	    // simulate img loading
	    document.body.addEvent
	    setTimeout(() => {
	      this.setState({
	        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      });
	    }, 100);
	}

	render(){
		const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
		return (
			<div>
				<Carousel ∏
					className="my-carousel"
			        autoplay={false}
			        infinite
			        selectedIndex={1}
			        swipeSpeed={35}
			    >
			    	{this.state.data.map(ii => (
			            <a href="http://www.baidu.com" key={ii} style={hProp}>
			              <img
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
			    <Flex>
			    	<Flex.Item><span>千亿国资基金发起</span></Flex.Item>
			    	<Flex.Item><span>两位国家领导人接见</span></Flex.Item>
			    </Flex>
			    <WhiteSpace size="md" />
			    <Flex>
			    	<Flex.Item><span>成交额超过<span>240亿</span></span></Flex.Item>
			    	<Flex.Item><span>中国互金稳健三强</span></Flex.Item>
			    </Flex>
			    <WhiteSpace size="md" />
			    <Flex>
			    	<Flex.Item>账户资金由浙商银行存管</Flex.Item>
			    </Flex>
			</div>
		)
	}
}