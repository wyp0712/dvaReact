import MemberCenter from "./Center/MemberCenter.js";
import MemberRegister from "./Register/MemberRegister";
import Details from "./Shop/details.js";
import Map from "./Map/maps";
import MenuList from "./Shop/menuList";
import DetailList from "./Shop/detailList";

const routers = [
    {
        pathname: 'membercenter',
        component: MemberCenter
    },
    {
        pathname: 'memberregister',
        component: MemberRegister
    },
    {
        pathname: 'maps',
        component: Map
    },
    {
        pathname: 'details',
        component: Details
    },
    {
        pathname: 'menuList',
        component: MenuList
    },
    {
        pathname: 'detailList',
        component: DetailList
    },
];

export default routers;