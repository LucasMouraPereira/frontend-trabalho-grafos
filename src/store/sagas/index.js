import { all } from "redux-saga/effects";
import * as global from "./global";
import * as home from "./home";

function* Sagas() {
  yield all([global.watcherSaga(), home.watcherSaga()]);
}

export default Sagas;
