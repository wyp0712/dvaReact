import Mock from "mockjs";
Mock.Random.extend({
    constellation: function (date) {
        var constellations = ['待消费', '已完成', '已退款']
        return this.pick(constellations)
    }
})
Mock.Random.extend({
    self: function (date) {
        var self = ['外送', '自提']
        return this.pick(self)
    }
})
let newData = Mock.mock([
    {
        behavior: Mock.Random.constellation(),
        self:Mock.Random.self(),
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: Mock.Random.ctitle(1, 20),
        found: "创建时间",
        timer: Mock.Random.now('hour'),
        'price|1-260': 1,
        src: Mock.Random.image('200x100', '#00405d', '#FFF', 'Hello Mock.js'),
        img: Mock.Random.dataImage('300x100', 'Hello Mock.js!'),
        sex: Mock.Random.integer(0, 1),//随机生成一个整数，0/1 ，根据这个来给“自提” “外送”
        addr: Mock.mock('@county(true)'),
        btn:[]
    },
    {
        behavior: Mock.Random.constellation(),
        self:Mock.Random.self(),
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: Mock.Random.ctitle(1, 20),
        found: "创建时间",
        timer: Mock.Random.now('hour'),
        'price|1-260': 1,
        src: Mock.Random.image('200x100', '#00405d', '#FFF', 'Hello Mock.js'),
        img: Mock.Random.dataImage('300x100', 'Hello Mock.js!'),
        sex: Mock.Random.integer(0, 1),//随机生成一个整数，0/1 ，根据这个来给“自提” “外送”
        addr: Mock.mock('@county(true)'),
        btn:[]
    },
    {
        behavior: Mock.Random.constellation(),
        self:Mock.Random.self(),
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: Mock.Random.ctitle(1, 20),
        found: "创建时间",
        timer: Mock.Random.now('hour'),
        'price|1-260': 1,
        src: Mock.Random.image('200x100', '#00405d', '#FFF', 'Hello Mock.js'),
        img: Mock.Random.dataImage('300x100', 'Hello Mock.js!'),
        sex: Mock.Random.integer(0, 1),//随机生成一个整数，0/1 ，根据这个来给“自提” “外送”
        addr: Mock.mock('@county(true)'),
        btn:[]
    },
    {
        behavior: Mock.Random.constellation(),
        self:Mock.Random.self(),
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: Mock.Random.ctitle(1, 20),
        found: "创建时间",
        timer: Mock.Random.now('hour'),
        'price|1-260': 1,
        src: Mock.Random.image('200x100', '#00405d', '#FFF', 'Hello Mock.js'),
        img: Mock.Random.dataImage('300x100', 'Hello Mock.js!'),
        sex: Mock.Random.integer(0, 1),//随机生成一个整数，0/1 ，根据这个来给“自提” “外送”
        addr: Mock.mock('@county(true)'),
        btn:[]
    },
    {
        behavior: Mock.Random.constellation(),
        self:Mock.Random.self(),
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: Mock.Random.ctitle(1, 20),
        found: "创建时间",
        timer: Mock.Random.now('hour'),
        'price|1-260': 1,
        src: Mock.Random.image('200x100', '#00405d', '#FFF', 'Hello Mock.js'),
        img: Mock.Random.dataImage('300x100', 'Hello Mock.js!'),
        sex: Mock.Random.integer(0, 1),//随机生成一个整数，0/1 ，根据这个来给“自提” “外送”
        addr: Mock.mock('@county(true)'),
        btn:[]
    }
])

let addressData = Mock.mock([
    {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        address:[
            {
                addr: Mock.mock('@county(true)'),
                name: Mock.Random.cname(),
                phone:"17801129479",
            }
        ],
        lunch:"餐盒",
        Distribution:"配送费",//配送费
        subtraction:"在线支付立减优惠",//满减
        timer: Mock.Random.now('hour'),
        envelopes:"红包",
        use:"选择地址后使用红包",
        Discount:"优惠说明",
        tableware:"餐具份数",
        tableware_a:"未选择",
        Remarks:"订单备注",
        Remarks_a:"口味,偏好",
        invoice:"发票信息",
        invoice_a:"商家不支持开发票",
        btn:"免密支付"
    }
])

export {
    newData,
    addressData
}