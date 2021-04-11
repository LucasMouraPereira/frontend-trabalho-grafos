import { all } from "redux-saga/effects";
import * as home from "./home";

function* Sagas() {
    yield all([
        home.watcherSaga(),
    ]);
}

export default Sagas;