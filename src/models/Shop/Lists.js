import { ato, mapDate, filter } from "../../utils/ato"
import axios from "axios";

export default {
  namespace: 'Lists',
  state: {
    statePrice:0,
    data: [],
    addList: [],
    clientMenu:[]
  },
  subscriptions: {},
  effects: {

    *fetchData({ }, { call, put }) {
      const json = yield axios("/api").then((res) => res.data).catch((err) => {
        return {
          code: 0
        }
      })
      if (!json.code) {
        let addList = JSON.parse(localStorage.getItem('addList'));
        addList && filter(addList,json.data)
        yield put({ type: "save", payLoad: json })
        // 刷新是数据和价格不变
        yield put({type:"setShopcarNum",payLoad:{}})
        return Promise.resolve(1);
      } else {
        return Promise.reject(0);
      }
    },

  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payLoad
      }
    },
    setShopcarNum(state, action) {
      const { payLoad } = action;
      let allPrice = 0, addList = [];
      const productData = mapDate(state.data, (item) => {
        if(payLoad.clear){
          item.sellCount=0
        }
        if (item.id === payLoad.id) {
          payLoad.code !== -1 ? item.sellCount++ : item.sellCount--;
          item.sellCount = item.sellCount <= 0 ? 0 : item.sellCount;
        }
        if (item.sellCount) {
          allPrice += item.sellCount * item.price;
          addList.push(item)//添加的菜品
        }
        return item;
      })

      localStorage.setItem('addList', JSON.stringify(ato(addList)));
      localStorage.setItem('adddata', JSON.stringify(addList));

      return { ...state, data: [...productData], statePrice:allPrice, addList }
    },
    submitPrice(state, action) {
      let clientMenu = [];
      mapDate(state.data, (item) => {
        if (item.sellCount) {
          clientMenu.push(item);
        }
      })
      // console.log(clientMenu)
      return { ...state, clientMenu};
    }
  }
};
