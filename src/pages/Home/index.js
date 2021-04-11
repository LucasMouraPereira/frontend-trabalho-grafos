import { END } from "redux-saga";
import { Creators as Actions } from "store/ducks/home";
import { wrapper } from "store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(Actions.requestHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    const { home: homeData } = store.getState();
    return {
      props: {
        test: { ...homeData.data.data },
      },
    };
  },
);

export { default } from "containers/Home";
