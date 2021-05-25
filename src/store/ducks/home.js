import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
  isLoading: false,
  products: [],
  aside: {},
  actualPage: 1,
  totalPerPage: 0,
  totalItems: 0,
  totalPages: 0,
};

export const { Creators, Types } = createActions({
  requestHome: ["page", "perPage"],
  requestHomeSuccess: ["data"],
  requestHomeFail: ["error"],
});

const requestHome = (state) => ({
  ...state,
  isLoading: true,
});

const requestHomeSuccess = (state, data) => ({
  ...state,
  products: data.products,
  aside: data.aside,
  actualPage: data.actualPage,
  totalPerPage: data.totalPerPage,
  totalItems: data.totalItems,
  totalPages: data.totalPages,
});

const requestHomeFail = (state, error) => ({
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
  [Types.REQUEST_HOME]: requestHome,
  [Types.REQUEST_HOME_SUCCESS]: requestHomeSuccess,
  [Types.REQUEST_HOME_FAIL]: requestHomeFail,
  [HYDRATE]: hydrate,
});
