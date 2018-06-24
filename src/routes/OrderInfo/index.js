import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './order.css';
import { AddAddress, MenuInfo, OptionInfo } from "../../components/OrderInfo"

class Order extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.dispatch({
			type: "address/fetchaddress"
		})
	}
	render() {
		let chargeData = this.props.datas, newaddr = this.props.newaddr;
		// console.log(newaddr)
		return (
			<div className={styles.wrap}>
				<div className={styles.head}>
					<Icon type="left" 
						className={styles.icon}
						onClick={
							() => {
								this.props.history.push("/details")
							}
						}
					></Icon>
					<h4>确认订单</h4>
				</div>
				<div className={styles.center} >
					<AddAddress newaddr={newaddr}/>
					<MenuInfo/>
					<OptionInfo chargeData={chargeData}/>
				</div>
				<div className={styles.footer}>
					<p>${this.props.priceAll}</p>
					<span>去支付</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// console.log(state)
	return {
		priceAll: state.Lists.statePrice,
		datas: state.address.addressData,
		newaddr: state.address.address
	};
}

export default connect(mapStateToProps)(Order);