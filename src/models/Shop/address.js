import axios from "axios";
export default {
  namespace: 'address',
  state: {
  },
  subscriptions: {},
  effects: {
    *fetchaddress({  }, { call, put }) {
      const json = yield axios.get("/api/addaddress").then(res =>res.data).catch(()=>{
          return{
              code:0
          }
      })
      if (json.code) {
          let address = null;
          json.addressData.map((item)=>{
              if(item.address){
                  address = item.address
              }else{
                  address = ""
              }
          })
          // console.log(address)
        yield put({ type: "address", payLoad: {
                json,address
            } 
        })
        return Promise.resolve(1)
      } else {
        return Promise.reject(0)
      }
    }
  },
  reducers: {
    address(state, action) {
        // console.log(action)
      return {
        ...state,
        ...action.payLoad
      }
    }
  },
};
