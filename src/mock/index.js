import axios from "axios";

import MockAdapter from "axios-mock-adapter";
import data from "./data.json";
import datas from "./datas.js";
import {addressData} from "./mockdata.js";

let mock = new MockAdapter(axios)

//所有数据
mock.onGet("/api").reply(200, data)

//消费情况数据
mock.onGet("/api/address").reply(200, {
    code:1,
    newData:datas
})

//地址
mock.onGet("/api/addaddress").reply(200, {
    code:1,
    addressData
})


