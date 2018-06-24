import React from 'react';
import { connect } from 'dva';
import styles from './foots.css';
import { Icon } from 'antd';
import { withRouter } from 'dva/router';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    setCount(e, id, code) {
        e.stopPropagation();
        this.props.dispatch({ type: 'Lists/setShopcarNum', payLoad: { id, code } })
    }
    getList() {
        let data = JSON.parse(localStorage.getItem('adddata'));
        if(data){
            let allPrice = JSON.parse(localStorage.getItem('allPrice'));
            this.props.history.push({
                pathname:"/orderinfo",
                query:{data,allPrice}
            })
        }else{
            alert("请选择菜品")
        }
        this.props.dispatch({ type: "Lists/submitPrice" })
    }
    clearShop() {
        this.props.dispatch({
            type:"Lists/setShopcarNum",
            payLoad:{
                clear:1
            }
        })
        localStorage.clear();
        this.forceUpdate()
    }
    render() {
        return (
            <div className={styles.box}>
                <footer className={styles.footers}>
                    <p>
                        <Icon
                            type="shopping-cart"
                            className={styles.icon}
                            onClick={
                                () => {
                                    this.setState({
                                        show: !this.state.show
                                    })
                                    if (this.state.show) {
                                        this.refs.mark.style.transform = "translateY(0%)"
                                    } else {
                                        this.refs.mark.style.transform = "translateY(200%)"
                                    }
                                }
                            }
                        />
                    </p>
                    <span className={styles.one}>￥{this.props.priceAll}</span>
                    {/*=======选好了按钮跳转========*/}
                    <span className={styles.two} onClick={
                        () => {
                            this.getList()
                        }
                    }>选好了</span>
                </footer>
                <div className={styles.mark} ref="mark">
                    <p
                        onClick={() => {
                            this.clearShop()
                        }}
                    >清空购物车</p>
                    <div ref="count">
                        {
                            this.props.carList.map((items, ind) => {
                                return (
                                    <dl className={styles.content} key={ind} >
                                        <dd className={styles.name}>{items.name}</dd>
                                        <dd className={styles.price}>{items.price}</dd>
                                        <dd>
                                            <span className={styles.mixin}
                                                onClick={
                                                    (e) => {
                                                        this.setCount(e, items.id, -1)
                                                    }
                                                }
                                            >-</span>
                                            <span className={styles.count}>{items.sellCount}</span>
                                            <span className={styles.add}
                                                onClick={
                                                    (e) => {
                                                        this.setCount(e, items.id, 1)
                                                    }
                                                }
                                            >+</span>
                                        </dd>
                                    </dl>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state.Lists)
    return {
        priceAll: state.Lists.statePrice,
        carList: state.Lists.addList
    };
}

export default connect(mapStateToProps)(withRouter(Footer));
