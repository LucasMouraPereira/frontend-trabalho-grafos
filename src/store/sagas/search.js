import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/search";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { PRODUCTS, SEARCH_TERM } from "utils/constants/endpoints";


function* requestSearchData({ term }) {
  try {
    const { data: response } = yield api({
      method: GET,
      url: `${PRODUCTS}${SEARCH_TERM}${term}`,
    });
    const data = {
      products: response.products
    }

    yield put({
      type: Types.REQUEST_SEARCH_SUCCESS,
      products: data.products
    });
  } catch (error) {
    const sendError = JSON.stringify(error);
    yield put({
      type: Types.REQUEST_SEARCH_FAIL,
      sendError,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.REQUEST_SEARCH, requestSearchData);
}
