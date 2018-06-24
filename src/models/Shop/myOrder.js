import axios from "axios";
export default {
  namespace: 'myOrder',
  state: {
  },
  subscriptions: {},
  effects: {
    *fetchorder({ ind }, { call, put }) {
      const json = yield axios.get("/api/address").then(res => res.data).catch((err) => {
        return {
          code: 1
        }
      })
      if (json.code) {
        let arr = []
        json.newData.map((item) => {
          if (item.type === ind) {
            arr.push(item)
          } else if (ind === 0) {
            arr.push(item)
          }
        })
        yield put({ type: "saves", payLoad: arr })
        return Promise.resolve(1)
      } else {
        return Promise.reject(0)
      }
    }
  },
  reducers: {
    saves(state, action) {
      return {
        ...state,
        ...action
      }
    }
  },
};
