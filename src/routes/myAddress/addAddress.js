import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './address.css';

class NewAddress extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <div className={styles.newAddress}>
                 <div className={styles.head}>
                    <Icon type="right" className={styles.icon}></Icon>
                    <h1>新增地址</h1>
                </div>
           </div>
        )
    }
}


NewAddress.propTypes = {
};

export default connect()(NewAddress);
