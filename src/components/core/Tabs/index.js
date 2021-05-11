import React, { useState } from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Tabs = ({ tabs, content }) => {
  const [isActiveTabs, setActiveTabs] = useState(0);

  const handleActiveTab = (id) => {
    if (id !== isActiveTabs) {
      setActiveTabs(id);
    }
  };
  return (
    <>
      <S.WrapperTabs>
        {tabs.map(({ text, id }) => (
          <S.Tab id={id} isActive={isActiveTabs === id} onClick={() => handleActiveTab(id)}>
            <p>{text}</p>
          </S.Tab>
        ))}
      </S.WrapperTabs>
      {tabs.map(({ id }) => (
        <div isActive={isActiveTabs === id}>{content}</div>
      ))}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
      initialState: PropTypes.bool,
    }),
  ).isRequired,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Tabs;
