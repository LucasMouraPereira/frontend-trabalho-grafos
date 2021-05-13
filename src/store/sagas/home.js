import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/home";
import { products } from "utils/data/products-mock";
import { information } from "utils/data/home-mock";

function* requestHomeData() {
    try {
        const data = {
            products: products.product,
            information,
        }
        yield put({
            type: Types.REQUEST_HOME_SUCCESS,
            products: data.products,
            information: data.information,
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