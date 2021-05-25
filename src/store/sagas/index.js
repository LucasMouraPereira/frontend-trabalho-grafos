import { all } from "redux-saga/effects";
import * as global from "./global";
import * as home from "./home";
import * as details from "./details";

function* Sagas() {
  yield all([
    global.watcherSaga(), 
    home.watcherSaga(),
    details.watcherSaga()
  ]);
}

export default Sagas;
