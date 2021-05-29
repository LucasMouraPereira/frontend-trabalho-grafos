import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
  isLoading: false,
  productsInCart: [],
  cartTotal: 0.0,
};

export const { Creators, Types } = createActions({
  requestCart: ["productsInCar", "cartTotal"],
  requestCartSuccess: ["data"],
  requestCartFail: ["error"],
});

const requestCart = ({ productsInCar, cartTotal }) => ({
  ...productsInCar,
  cartTotal,
  isLoading: true,
});

const requestCartSuccess = (state, data) => ({
  ...state,
  productsInCar: data.productsInCar,
  cartTotal: data.cartTotal,
  isLoading: false,
});

const requestCartFail = (state, error) => ({
  ...state,
  error,
  isLoading: false,
});

const hydrate = (state, data) => ({
  ...state,
  isLoading: false,
  data,
});

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_CART]: requestCart,
  [Types.REQUEST_CART_SUCCESS]: requestCartSuccess,
  [Types.REQUEST_CART_FAIL]: requestCartFail,
  [HYDRATE]: hydrate,
});
