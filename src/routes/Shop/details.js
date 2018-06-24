import React from 'react';
import { connect } from 'dva';
import styles from './details.css';
import '../../index.css';
import BScroll from 'better-scroll';
import Foots from "../../components/common/foots";
import Headers from "../../components/common/headers";
import Lists from "../../components/common/Lists";
import mock from "../../mock";

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'goods',
            data: [],
            ind: 0,
            listHeight: [],
            scrollY: 0
        }
    }
    getHeight() {
        const foodList = this.refs.foodwrapper.getElementsByClassName('foodlist');
        [].slice.call(foodList).forEach(item => {
            this.state.listHeight.push(item.offsetTop)
        })
    }
    currentIndex() {
        let rs = this.state.listHeight.findIndex(item => item > this.state.scrollY)
        rs = rs === -1 ? this.state.listHeight.length : rs
        rs = rs - 1;
        return rs;
    }
    change(ind) {
        const foodList = this.refs.foodwrapper.getElementsByClassName('foodlist');
        const els = foodList[ind];
        this.foodScroll.scrollToElement(els, 500)
    }
    componentDidMount() {
        this.props.dispatch({
            type: "Lists/fetchData"
        })
        this.meunScroll = new BScroll(this.refs.menuwrapper, {
            click: true
        });
        this.foodScroll = new BScroll(this.refs.foodwrapper, {
            click: true,
            probeType: 3
        });
        //设置监听滚动位置
        this.foodScroll.on('scroll', (pos) => {
            const ScrollY = Math.abs(Math.round(pos.y));
            const cur = this.currentIndex()
            this.setState({
                scrollY: ScrollY,
                ind: cur
            })
            setTimeout(() => {
                this.getHeight()
            }, 100)
        })
    }
    render() {
        let {data} = this.props;
        return (
            <div className={styles.box}>
                {/*头部*/}
                <Headers data={this.props}></Headers>
                {/*aside侧边栏*/}
                <div className={styles.wrapper}>
                    <div className={styles.menuwrapper} ref="menuwrapper">
                        <ul>
                            {
                                data ? 
                                data.map((list, index) => {
                                    return (
                                        <li className={this.currentIndex() === index ? styles.bg : styles.menuitem}
                                            key={index}
                                            onClick={
                                                () => {
                                                    this.change(index)
                                                }
                                            }>
                                            <span className={styles.text}>
                                                <span className={styles.icon}></span>{list.name}
                                            </span>
                                        </li>
                                    )
                                }) :<div>暂无商品信息</div> 
                            }
                        </ul>
                    </div>
                    {/*菜单详情*/}
                    <div className={styles.foodswrapper} ref="foodwrapper">
                        <ul>
                            {
                                data ? 
                                data.map((item, index) => {
                                    return (
                                        <li className="foodlist" key={index}>
                                            <h3 className={styles.title}>{item.name}</h3>
                                            <ul>
                                                {
                                                    item.foods.map((items, ind) => {
                                                        return (
                                                            <Lists key={ind} items={items}></Lists>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                }) :<div>暂无商品信息</div> 
                            }
                        </ul>
                    </div >
                </div >
                {/*计算价格*/}
                <Foots></Foots>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        data:state.Lists.data
    };
}

export default connect(mapStateToProps)(Details);
