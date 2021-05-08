import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ScrollToTop from "./ScrollToTop";

import * as S from "./styled";

const Layout = ({ children }) => {
  const router = useRouter();
  const trackScrollToTop = () => {
    if (typeof window !== "undefined") {
      let path = router.asPath.split("/");
      path.shift();
      path = path.join(":");
    }
  };
  return (
    <S.Container>
      <ScrollToTop onClick={() => trackScrollToTop()} />
      {children}
    </S.Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;