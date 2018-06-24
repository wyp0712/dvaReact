import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

app.model(require("./models/memberCenter"));

app.model(require("./models/memberRegister"));

app.model(require("./models/Shop/Lists"));
//我的订单
app.model(require("./models/Shop/myOrder"));
// 添加地址
app.model(require("./models/Shop/address"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
