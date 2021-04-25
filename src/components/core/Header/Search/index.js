import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "utils/static/svg/search.svg";
import * as S from "./styled";

const Search = ({ handleSubmit }) => {
  const [params, setParams] = useState("");
  return (
    <S.Container>
      <S.WrapperForm onSubmit={(event) => handleSubmit(event, params)} method="get">
        <S.WrapperSearch>
          <SearchIcon />
          <S.InputStyled value={params} onChange={(event) => setParams(event.target.value)} />
        </S.WrapperSearch>
        <S.Button type="submit">Buscar</S.Button>
      </S.WrapperForm>
    </S.Container>
  );
};

Search.propTypes = () => ({
  handleSubmit: PropTypes.func.isRequired,
});

export default Search;