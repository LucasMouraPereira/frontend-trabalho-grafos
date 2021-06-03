import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "utils/static/svg/search.svg";


import * as S from "./styled";

const Search = ({ handleSubmit, params, setParams }) => (
    <S.Container>
      <S.WrapperForm 
        onSubmit={handleSubmit} 
        method="get"
      >
        <S.InputStyled 
          value={params} 
          onChange={(event) => setParams(event.target.value)}
          placeholder="Procure seu jogo"
        />
        <S.Button type="submit">
          <SearchIcon />
        </S.Button>
      </S.WrapperForm>
    </S.Container>
  );

Search.propTypes = () => ({
  handleSubmit: PropTypes.func.isRequired,
});

export default Search;
