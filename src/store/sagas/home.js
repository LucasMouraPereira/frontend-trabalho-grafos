import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/home";
import { test } from "utils/data/home-mock";

function* requestHomeData() {
    try {
        const data = {
            test
        }
        yield put({
            type: Types.REQUEST_HOME_SUCCESS,
            data,
        });
    } catch (error) {
        yield put({
            type: Types.REQUEST_HOME_FAIL,
            error,
        });
    }
}

export function* watcherSaga() {
    yield takeLatest(Types.REQUEST_HOME, requestHomeData);
}