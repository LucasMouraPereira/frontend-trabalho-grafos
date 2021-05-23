import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/home";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { PRODUCTS } from "utils/constants/endpoints";

import { aside, information } from "utils/data/home-mock";

function* requestHomeData() {
  try {
    const { data: response } = yield api({
      method: GET,
      url: `${PRODUCTS}?page=${1}&length=${12}`,
    });

    const data = {
      products: response.products,
      information,
      aside,
      pages: response.meta,
    };

    yield put({
      type: Types.REQUEST_HOME_SUCCESS,
      products: data.products,
      information: data.information,
      aside: data.aside,
      pages: data.pages,
    });
  } catch (error) {
    const sendError = JSON.stringify(error);
    yield put({
      type: Types.REQUEST_HOME_FAIL,
      sendError,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.REQUEST_HOME, requestHomeData);
}
