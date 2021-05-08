import { END } from "redux-saga";
import { Creators as Actions } from "store/ducks/store";
import { wrapper } from "store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(Actions.requestStore());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    const { store: storeData } = store.getState();
    return {
      props: {
        isHome: storeData.isHome,
      },
    };
  },
);

export { default } from "containers/Store";