import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MemberCenter from "./routes/Center/MemberCenter";
import MemberRegister from "./routes/Register/MemberRegister";
import Details from "./routes/Shop/details";
import Map from "./routes/Map/maps";
import MenuList from "./routes/Shop/menuList";
import DetailList from "./routes/Shop/detailList";
import OrderInfo from "./routes/OrderInfo";
import MyAddress from "./routes/myAddress/myAddress";
import addAddress from "./routes/myAddress/addAddress";
import MyOrder from "./routes/myOrder";
import Order1 from "./routes/myOrder/order";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/details" />} />
        {/*会员中心*/}
        <Route path="/membercenter" component={MemberCenter} />
        {/*注册会员*/}
        <Route path="/memberregister" component={MemberRegister} />
        {/*地图*/}
        <Route path="/maps" component={Map} />
        {/*菜单详情*/}
        <Route path="/details" component={Details} />
        {/*暂时还没有写*/}
        <Route path="/menuList" component={MenuList} />
        {/*菜单详情*/}
        <Route path="/detailList" component={DetailList} />
        {/*地址--订单详情--支付*/}
        <Route path="/orderinfo" component={OrderInfo} />
        {/*我的地址*/}
        <Route path="/myAddress" component={MyAddress} />
        {/*添加地址*/}
        <Route path="/addAddress" component={addAddress} />
        {/*个人订单*/}
        <Route path="/myOrder" component={MyOrder}/>
        {/*啥也没有===*/}
        <Route path="/order1" component={Order1}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
