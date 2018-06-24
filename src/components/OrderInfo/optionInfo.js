import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './style.css';

class OptionInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {chargeData} = this.props;
        // console.log(chargeData)
        return (
            <div className={styles.optionInfo}>
                <div className={styles.kong}>
                    {
                        chargeData ? chargeData.map((item,index)=>{
                            return(
                                <dl className={styles.charge} key={index}>
                                    <dt>
                                        <div></div>
                                    </dt>
                                    <dd className={styles.name}>{item.lunch}</dd>
                                    <dd className={styles.price}>$8</dd>
                                </dl>
                            )
                        }) : ""
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

export default connect(mapStateToProps)(OptionInfo);