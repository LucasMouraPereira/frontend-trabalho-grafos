import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
    isLoading: false,
    header: {},
    footer: {},
};

export const { Creators, Types } = createActions({
    requestGlobal: ["global"],
    requestGlobalSuccess: ["data"],
    requestGlobalFail: ["error"],
});

const requestGlobal = (state) => ({
    ...state,
    isLoading: true,
  });
  
  const requestGlobalSuccess = (state, data) => ({
    ...state,
    header: data.header,
    footer: data.footer,
    isLoading: false,
  });
  
  const requestGlobalFail = (state, error) => ({
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
    [Types.REQUEST_GLOBAL]: requestGlobal,
    [Types.REQUEST_GLOBAL_SUCCESS]: requestGlobalSuccess,
    [Types.REQUEST_GLOBAL_FAIL]: requestGlobalFail,
    [HYDRATE]: hydrate,
  });
  