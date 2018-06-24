import React from 'react';
import { connect } from 'dva';
import styles from "./Lists.css"
import { withRouter } from 'dva/router';

class DetailList extends React.Component {
    constructor(props) {
        super(props)
    }
    jumpRoute(items){
        window.sessionStorage.setItem('data',JSON.stringify(items));
        this.props.history.push({
            pathname: '/detailList', query: {
                items,
            }
        })
    }
    setCount(e,id,code){
        e.stopPropagation();
        this.props.dispatch({type:'Lists/setShopcarNum',payLoad:{id,code}})
        // const obj = JSON.parse(localStorage.getItem("addList"));
    }
    render() {
        let {items} = this.props;
        return (  
            <li className={styles.fooditem} onClick={
                    ()=>{
                        this.jumpRoute(items)
                    }
                }>
                <div className={styles.icon}>
                    <img src={items.image} />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.name}>{items.name}</h2>
                    <p className={styles.desc}>{items.description}</p>
                    <div className={styles.price}>
                        <span className={styles.now}>￥{items.price}</span>
                        <span className={styles.old}>￥{items.oldPrice}</span>
                    </div>
                    <p className={styles.num} ref="num">
                        {/*减法*/}
                        <span
                            className={styles.mixin}
                            onClick={
                                (e)=>{
                                    this.setCount(e,items.id,-1)
                                }
                            }
                        >-</span>
                        {/*数量*/}
                        <span
                            className={styles.count}
                            ref="dom"
                        >{items.sellCount}</span>
                        {/*加法===============*/}
                        <span
                            className={styles.add}
                            onClick={
                                (e)=>{
                                    this.setCount(e,items.id,1)
                                }
                            }
                        >+</span>
                    </p>
                </div>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
       ...state
    }
}

export default connect(mapStateToProps)(withRouter(DetailList));
