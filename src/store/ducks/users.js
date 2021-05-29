import { createActions, createReducer } from "reduxsauce";
import { HYDRATE } from "next-redux-wrapper";

const INITIAL_STATE = {
    isLoading: false,
    users: {},
};

export const { Creators, Types } = createActions({
    requestUsers: ["users"],
    requestUsersSuccess: ["data"],
    requestUsersFail: ["error"],
});

const requestUsers = (state) => ({
    ...state,
    isLoading: true,
  });
  
  const requestUsersSuccess = (state, data) => ({
    ...state,
    users: data.users,
    isLoading: false,
  });
  
  const requestUsersFail = (state, error) => ({
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
    [Types.REQUEST_USERS]: requestUsers,
    [Types.REQUEST_USERS_SUCCESS]: requestUsersSuccess,
    [Types.REQUEST_USERS_FAIL]: requestUsersFail,
    [HYDRATE]: hydrate,
  });
  