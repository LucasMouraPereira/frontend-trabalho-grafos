import { END } from "redux-saga";
import { Creators as Actions } from "store/ducks/global";
import { wrapper } from "store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(Actions.requestGlobal());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    const { global: globalData } = store.getState();
    return {
      props: {
        header: { ...globalData.header },
        footer: { ...globalData.footer }
      },
    };
  },
);

export { default } from "containers/Home";
