import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './detailsList.css';
import data from "../../assets/data.json";
import Foots from "../../components/common/foots"

class DetailList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = JSON.parse(window.sessionStorage.getItem('data'));
        return (
            <div className={styles.box}>
                <header className={styles.header}>
                    <div className={styles.top}>
                        <Icon type="left"
                            className={styles.icon}
                            onClick={
                                () => {
                                    this.props.history.push("/details")
                                }
                            }
                        />
                    </div>
                    <p>
                        <img src={data.image} />
                    </p>
                </header>
                <div className={styles.content}>
                    <div>
                        <h2>{data.name}</h2>
                        <p>菜品描述</p>
                        <span><b>${data.price}</b>/份</span>
                    </div>
                </div>
                <div className={styles.infos}>
                    <div>
                        <h2>菜品详情</h2>
                        <p>{data.info}</p>
                    </div>
                </div>
                <Foots></Foots>
            </div>
        )
    }
}


DetailList.propTypes = {
};

export default connect()(DetailList);
