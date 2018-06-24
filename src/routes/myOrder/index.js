import React from 'react';
import { connect } from 'dva';
import { Router, Route, Switch, Redirect, Link } from 'dva/router';
import { Icon } from 'antd';
import styles from './myorder.css';

class myOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: ["全部", "待消费", "已完成", "已退款"],
            Index: 0,
            show: true
        }
    }
    getsituation(index){
        this.setState({
            Index:index
        })
        this.props.dispatch({
            type: "myOrder/fetchorder",
            ind:index
        })
    }
    render() {
        let data = this.props.data
        let { lists } = this.state;
        return (
            <div className={styles.myOrder}>
                <ul className={styles.orderNav}>
                    {
                        lists.map((item,index) => {
                            return (
                                <li className={this.state.Index === index ? styles.bg : ""}
                                    key={index}
                                    onClick={()=>{
                                        this.getsituation(index)
                                    }}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
                <div className={styles.orderList}>
                    {
                        data ? data.map((item, ind) => {
                            return (
                                <ul key={ind}>
                                    <li className={styles.orderList1}>
                                        <h4>{item.name}</h4>
                                        <span>{item.state}</span>
                                    </li>
                                    <li className={styles.orderList2}>
                                        <p><span>创建时间</span></p>
                                        <div>${item.price}</div>
                                    </li>
                                    <li className={styles.orderList3}>
                                        <div>
                                            <p><img src={item.image} /></p><span>{item.self}</span>
                                        </div>
                                        <div className={styles.box}>
                                            <span className={styles.btn}>{item.button}</span>
                                        </div>
                                    </li>
                                </ul>
                            )
                        }) : "暂无数据"
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.myOrder.payLoad
    };
}
export default connect(mapStateToProps)(myOrder);
