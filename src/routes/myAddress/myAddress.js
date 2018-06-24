import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './address.css';

class Address extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <div className={styles.address}>
                <div className={styles.head}>
                    <Icon type="right" className={styles.icon}></Icon>
                    <h1>我的地址</h1>
                </div>
                <div className={styles.address_box}>
                    <div className={styles.address_name}>
                        <ul>
                            <li className={styles.address_namebox}>
                                <p>路飞</p>
                                <span>男士</span>
                                <span>18363873949</span>
                            </li>
                            <li className={styles.address_logo}>
                                <p>标签</p>
                                <span>宇宙星辰大海</span>
                            </li>
                            <li>星辰深处某个地球</li>
                        </ul>
                    </div>
                    <div className={styles.address_Range}>
                        以下地址超出配送范围
                    </div>
                    <div className={styles.address_information}>
                         <ul>
                            <li className={styles.address_namebox}>
                                <p>孙奎伟</p>
                                <span>男士</span>
                                <span>1456325778215</span>
                            </li>
                            <li className={styles.address_logo}><p>佛挡杀佛</p>1</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.foot}
                    onClick={
                        ()=>{
                            this.props.history.push("/addAddress")
                        }
                    }
                >
                    <p>新增收货地址</p>
                </div>
           </div>
        )
    }
}

Address.propTypes = {
};

export default connect()(Address);
