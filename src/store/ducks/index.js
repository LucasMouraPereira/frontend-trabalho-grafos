import { combineReducers } from "redux";
import home from "./home";
import global from "./global";
import details from "./details";

const Reducers = combineReducers({
    global,
    home,
    details
});

export default Reducers;