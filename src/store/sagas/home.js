/* eslint-disable camelcase */
import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/home";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { PRODUCTS } from "utils/constants/endpoints";

import { aside, information } from "utils/data/home-mock";

function* requestHomeData({page = 1, perPage = 12}) {
  try {
    const { data: response } = yield api({
      method: GET,
      url: `${PRODUCTS}?page=${page}&length=${perPage}`,
    });
    const data = {
      products: response.products,
      information,
      aside,
      page: response.meta.page,
      length: response.meta.length,
      total: response.meta.total,
      totalPages: response.meta.total_pages,
    };
    yield put({
      type: Types.REQUEST_HOME_SUCCESS,
      products: data.products,
      information: data.information,
      aside: data.aside,
      actualPage: data.page,
      totalPerPage: data.length,
      totalItems: data.total,
      totalPages: data.totalPages
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
