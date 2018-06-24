import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './style.css';

class MenuInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let data = JSON.parse(localStorage.getItem('adddata'));
        return (
            <div className={styles.content}>
                <div className={styles.shoplist}>
                    <div className={styles.shop}>
                        <p><span>满记甜品    </span>    (上地西路店)</p>
                    </div>
                    {
                        data ? data.map((item, ind) => {
                            return (
                                <dl className={styles.menu} key={ind}>
                                    <dt>
                                        <div><img src={item.image} /></div>
                                        <p>{item.name}</p>
                                    </dt>
                                    <dd className={styles.name}>*{item.sellCount}</dd>
                                    <dd className={styles.price}>${item.price}</dd>
                                </dl>
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
	};
}

export default connect(mapStateToProps)(MenuInfo);