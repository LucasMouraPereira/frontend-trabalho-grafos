import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/home";
import { products } from "utils/data/products-mock";

function* requestHomeData() {
    try {
        const data = {
            products: products.product,
        }
        yield put({
            type: Types.REQUEST_HOME_SUCCESS,
            products: data.products,
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