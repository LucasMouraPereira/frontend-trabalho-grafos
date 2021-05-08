import { all } from "redux-saga/effects";
import * as global from "./global";
import * as home from "./home";
import * as store from "./store";

function* Sagas() {
    yield all([
        global.watcherSaga(),
        home.watcherSaga(),
        store.watcherSaga(),
    ]);
}

export default Sagas;