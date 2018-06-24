import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './headers.css';

class Foots extends React.Component {
    constructor(props) {
        super(props);
        this.toPathname = this.toPathname.bind(this);
    }
    toPathname() {
        // const { history } = this.props;
        // history.push({
        //     pathname: '/menuList', params: {
        //         data,
        //     }
        // })
        // history.push('/menuList')
    }
    render() {
        return (
            <header className={styles.header}>
                <p>
                    <img src={require('../../assets/guandong5.webp')} />
                </p>
                <dl>
                    <dd>满记甜品(西单大学车城店)</dd>
                    <dd>营业中</dd>
                </dl>
                <span onClick={
                    () => {
                        this.toPathname()
                        {/*this.props.history.push("/menuList")*/}
                    }
                }> > </span>
            </header>
        )
    }
}


Foots.propTypes = {
};

export default connect()(Foots);
