import React from 'react';
import { connect } from 'dva';
import BScroll from 'better-scroll';
import styles from './menuList.css';
import {
    Router,
    Link
} from 'dva/router';

class MenuList extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        // console.log(this)
        console.log(this.props)
    }
    render() {
        return (
           <div className={styles.box}>
               <header className={styles.header}>
                   <p>
                       <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750" alt=""/>
                   </p>
               </header>
           </div>
        )
    }
}


MenuList.propTypes = {
};

export default connect()(MenuList);
