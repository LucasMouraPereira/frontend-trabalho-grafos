import PropTypes from "prop-types";
import { wrapper } from "store";
import GlobalStyle from "utils/style/globalStyle";
import Header from "components/core/Header";
import Layout from "components/core/Layout";
import Footer from "components/core/Footer";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Header />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer />
  </>
);

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
