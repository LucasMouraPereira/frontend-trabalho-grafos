import { takeLatest, put } from "redux-saga/effects";
import { Types } from "store/ducks/cart";

function* requestCartData({ productsInCar, cartTotal }) {
  try {
    const data = {
      productsInCar,
      cartTotal,
    };
    yield put({
      type: Types.REQUEST_CART_SUCCESS,
      productsInCar: data.productsInCar,
      cartTotal: data.cartTotal,
    });
  } catch (error) {
    yield put({
      type: Types.REQUEST_CART_FAIL,
      error,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.REQUEST_CART, requestCartData);
}
