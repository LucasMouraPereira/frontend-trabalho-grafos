import { combineReducers } from "redux";
import home from "./home";
import global from "./global";

const Reducers = combineReducers({
    global,
    home,
});

export default Reducers;