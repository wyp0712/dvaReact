import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import { withRouter } from 'dva/router';
import styles from './style.css';

class AddAddress extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.newaddr)
        let newaddr = this.props.newaddr;
        return (
            <div>
                <div className={styles.address}>
                {
                    newaddr ? newaddr.map((item,inds)=>{
                        return (
                            <div className={styles.myaddress} key={inds}>
                                <span>订单配送至</span>
                                <div className={styles.myaddr}>
                                    <span>{item.addr}</span>
                                    <Icon type="right" className={styles.icon}></Icon>
                                </div>
                                <div><span>{item.name}(先生)</span><span>{item.phone}</span></div>
                            </div>
                        )
                    }) : <p onClick={()=>{
                            this.props.history.push("/myAddress")
                        }}>
                            <Icon type="plus" className={styles.icon}></Icon>
                            <span>添加收货地址</span>
                        </p>
                    }
                </div>
                <div className={styles.times}>
                    <ul>
                        <li>
                            <p>送达时间</p>
                            <span>尽快送达(12.53送达)</span>
                            <Icon type="right" className={styles.icon}></Icon>
                        </li>
                        <li>
                            <p>支付方式</p>
                            <span>在线支付</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps)(withRouter(AddAddress));