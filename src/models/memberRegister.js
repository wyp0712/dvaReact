import { getPhones } from "../services/test"
export default {
    namespace: 'memberRegister',
    state: {},
    reducers: {},
    effects: {
        *getPhones({ payLoad }, { call, put }) {
            const json = yield call(getPhones, 'http://localhost:8091/api/getPhone', {
                method: "GET",
                headers: {
                    token: localStorage.getItem('token') || ''
                }
            })
            console.log(json)
            // return Promise.resolve(json)
        }
    },
    subscriptions: {
        setup() {
            console.log('这里是 memberregister')
        }
    },
};