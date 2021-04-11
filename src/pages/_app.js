import PropTypes from "prop-types";
import { wrapper } from "store";
import GlobalStyle from "utils/style/globalStyle";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
