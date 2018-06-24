import React from 'react';
import { connect } from 'dva';
import styles from './maps.css';

let falg = true;
class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            sendPoint: this.sendPoint.bind(this),
        }
    }
    componentDidMount() {
        this.map();
    }
    map() {
        let that = this
        var BMap = window.BMap;
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        var local = new BMap.LocalSearch(map, {
            renderOptions: { map: map }
        });
        local.search("满记甜食");
        let n = { ...local }
        setTimeout(function () {

            that.setState({
                list: n.wf
            })
        }, 2000)

        map.enableScrollWheelZoom(true);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.list.length > 0) {
            falg = false;
            return true;
        }
        return false;
    }
    hide() {
        setTimeout(() => {
        }, 0)
    }
    getMapDetails(points) {
        let { lng, lat } = points;
        let BMap = window.BMap;
        let map = new BMap.Map("detailemap");
        var point = new BMap.Point(lng, lat);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        map.enableScrollWheelZoom(true);
    }
    sendPoint(point) {
        this.props.history.push(`/maps?lng=${point.lng}&lat=${point.lat}`)
    }
    render() {
        const { list, sendPoint } = this.state
        return (
            <div className={styles.map-list}>
                <div className={styles.map}>
                    <p>店铺列表</p>
                    {
                        falg ? <p className={styles.loding}><img src='http://img.sj33.cn/uploads/allimg/200803/20080320132825472.gif' alt='加载动画' /></p> : ''
                    }
                    {
                        list ? list.map((v, k) => {
                            return (
                                <div key={k} onClick={() => {
                                    sendPoint(v.point)
                                }} >
                                    <p>{v.title}</p>
                                    <p>{v.address}</p>
                                    <p>{v.phoneNumber}</p>
                                    <hr />
                                </div>
                            )
                        }) : ''
                    }
                    <div id="allmap" style={{
                        display: 'none'
                    }}></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Map);