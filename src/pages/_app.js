import React from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { wrapper } from "store";
import NProgress from "nprogress";
import GlobalStyle from "utils/style/globalStyle";
import { CartProvider } from "contexts/CartContext";
import { AuthProvider } from "contexts/AuthContext";
import Header from "components/core/Header";
import Layout from "components/core/Layout";
import Footer from "components/core/Footer";

Router.events.on("routerChangeStart", (url) => {
  console.info(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routerChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => (
  <AuthProvider>
    <CartProvider>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </CartProvider>
  </AuthProvider>
);

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(App);
