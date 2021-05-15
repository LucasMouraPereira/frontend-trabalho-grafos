import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/home";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { PRODUCTS } from "utils/constants/endpoints";

import { products } from "utils/data/products-mock";
import { aside, information } from "utils/data/home-mock";

function* requestHomeData() {
    try {
        // const { data: productsApi } = yield api({
        //     method: GET,
        //     url: PRODUCTS
        // });
        // console.log(productsApi)
        const data = {
            products: products.product,
            information,
            aside
        }
        yield put({
            type: Types.REQUEST_HOME_SUCCESS,
            products: data.products,
            information: data.information,
            aside: data.aside
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