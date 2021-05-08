import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/store";
import { isHome } from "utils/data/store-mock";

function* requestStoreData() {
    try {
        const data = {
            isHome ,
        }
        yield put({
            type: Types.REQUEST_STORE_SUCCESS,
            isHome : data.isHome ,
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