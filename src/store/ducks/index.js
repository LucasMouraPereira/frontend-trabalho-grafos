import { combineReducers } from "redux";
import home from "./home";
import store from "./store";
import global from "./global";

const Reducers = combineReducers({
    global,
    home,
    store,
});

export default Reducers;