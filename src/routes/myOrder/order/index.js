import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from '../myorder.css';

class Order1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          
                <div className={styles.myOrder}>
                    this 是 order1111111111111111
                </div>
        )
    }
}
Order1.propTypes = {
};

export default connect()(Order1);
