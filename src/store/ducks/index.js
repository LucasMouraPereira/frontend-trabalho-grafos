import { combineReducers } from "redux";
import home from "./home";
import global from "./global";
import details from "./details";
import search from "./search";

const Reducers = combineReducers({
    global,
    home,
    details,
    search
});

export default Reducers;