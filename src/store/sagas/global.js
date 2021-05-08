import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/global";
import { header } from "utils/data/header-mock";
import { footer } from "utils/data/footer-mock";

function* requestGlobalData() {
    try {
        const data = {
            header,
            footer,
        }
        yield put({
            type: Types.REQUEST_GLOBAL_SUCCESS,
            header: data.header,
            footer: data.footer,
        });
    } catch (error) {
        yield put({
            type: Types.REQUEST_GLOBAL_FAIL,
            error,
        });
    }
}

export function* watcherSaga() {
    yield takeLatest(Types.REQUEST_GLOBAL, requestGlobalData);
}