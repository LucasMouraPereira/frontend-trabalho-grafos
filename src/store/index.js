/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { isServeSide } from "utils/helpers/render";
import Reducers from "./ducks";
import Sagas from "./sagas";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxDevTools =
    typeof window !== "undefined" &&
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  if(isServeSide) {
    const store = createStore(
      Reducers,
      reduxDevTools
        ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
        : compose(applyMiddleware(sagaMiddleware)),
    );
  
    store.sagaTask = sagaMiddleware.run(Sagas);
    return store;
  }

  return null;
  
};

export const wrapper = createWrapper(makeStore);