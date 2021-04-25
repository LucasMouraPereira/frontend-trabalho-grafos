import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
    isLoading: false,
    header: {},
    footer: {},
};

export const { Creators, Types } = createActions({
    requestStore: ["store"],
    requestStoreSuccess: ["data"],
    requestStoreFail: ["error"],
});

const requestStore = (state) => ({
    ...state,
    isLoading: true,
  });
  
  const requestStoreSuccess = (state, data) => ({
    ...state,
    header: data.header,
    footer: data.footer,
    isLoading: false,
  });
  
  const requestStoreFail = (state, error) => ({
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
    [Types.REQUEST_STORE]: requestStore,
    [Types.REQUEST_STORE_SUCCESS]: requestStoreSuccess,
    [Types.REQUEST_STORE_FAIL]: requestStoreFail,
    [HYDRATE]: hydrate,
  });
  