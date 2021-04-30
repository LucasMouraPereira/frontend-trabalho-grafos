import { END } from "redux-saga";
import { Creators as Actions } from "store/ducks/store";
import { wrapper } from "store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req }) => {
    store.dispatch(Actions.requestStore());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    const { store: storeData } = store.getState();
    const url = req.headers.referer;
    return {
      props: {
        header: url,
        footer: { ...storeData.footer }
      },
    };
  },
);

export { default } from "containers/Store";