import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/details";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { PRODUCTS } from "utils/constants/endpoints";

import { details } from "utils/data/details-mock";

function* requestDetailsData(state) {
  try {
    const idGame = state.details;
    const { data: response } = yield api({
      method: GET,
      url: `${PRODUCTS}?page=${1}&length=${31}`,
    });
    const data = {
      product: response.products,
      details,
    }
    const gameDetails = data.product.find(game => game.id === idGame);
    yield put({
      type: Types.REQUEST_DETAILS_SUCCESS,
      product: gameDetails,
      details: data.details
    });
  } catch (error) {
    const sendError = JSON.stringify(error);
    yield put({
      type: Types.REQUEST_DETAILS_FAIL,
      sendError,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.REQUEST_DETAILS, requestDetailsData);
}
