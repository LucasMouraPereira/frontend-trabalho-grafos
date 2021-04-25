import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/store";
import { header } from "utils/data/header-mock";
import { footer } from "utils/data/footer-mock";

function* requestStoreData() {
    try {
        const data = {
            header,
            footer,
        }
        yield put({
            type: Types.REQUEST_STORE_SUCCESS,
            header: data.header,
            footer: data.footer,
        });
    } catch (error) {
        yield put({
            type: Types.REQUEST_STORE_FAIL,
            error,
        });
    }
}

export function* watcherSaga() {
    yield takeLatest(Types.REQUEST_STORE, requestStoreData);
}