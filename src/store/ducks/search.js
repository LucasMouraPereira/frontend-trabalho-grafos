import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
    isLoading: false,
    product: {},
};

export const { Creators, Types } = createActions({
    requestSearch: ["term"],
    requestSearchSuccess: ["data"],
    requestSearchFail: ["error"],
});

const requestSearch = (state) => ({
    ...state,
    isLoading: true,
  });
  
  const requestSearchSuccess = (state, data) => ({
    ...state,
    products: data.products,
  });
  
  const requestSearchFail = (state, error) => ({
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
    [Types.REQUEST_SEARCH]: requestSearch,
    [Types.REQUEST_SEARCH_SUCCESS]: requestSearchSuccess,
    [Types.REQUEST_SEARCH_FAIL]: requestSearchFail,
    [HYDRATE]: hydrate,
  });
  