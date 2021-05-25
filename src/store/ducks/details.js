import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
    isLoading: false,
    product: {},
    details: {}
};

export const { Creators, Types } = createActions({
    requestDetails: ["details"],
    requestDetailsSuccess: ["data"],
    requestDetailsFail: ["error"],
});

const requestDetails = (state) => ({
    ...state,
    isLoading: true,
  });
  
  const requestDetailsSuccess = (state, data) => ({
    ...state,
    product: data.product,
    details: data.details,
    isLoading: false,
  });
  
  const requestDetailsFail = (state, error) => ({
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
    [Types.REQUEST_DETAILS]: requestDetails,
    [Types.REQUEST_DETAILS_SUCCESS]: requestDetailsSuccess,
    [Types.REQUEST_DETAILS_FAIL]: requestDetailsFail,
    [HYDRATE]: hydrate,
  });
  