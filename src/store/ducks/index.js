import { combineReducers } from "redux";
import home from "./home";
import global from "./global";
import details from "./details";
import search from "./search";
import cart from "./cart";

const Reducers = combineReducers({
    global,
    home,
    details,
    search,
    cart,
});

export default Reducers;