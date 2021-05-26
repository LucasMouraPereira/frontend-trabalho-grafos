import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SearchIcon from "utils/static/svg/search.svg";
import { Creators as Actions } from "store/ducks/search";
import { HOME ,SEARCH } from "utils/constants/urls";

import * as S from "./styled";

const Search = ({ handleSubmit }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const onSearchGames = () => {
    const href = `${HOME}/1${SEARCH}${params}`;
    dispatch(Actions.requestSearch(params));
    router.push(href);
  };
  return (
    <S.Container>
      <S.WrapperForm 
        onSubmit={(event) => handleSubmit(event, params)} 
        method="get"
      >
        <S.InputStyled 
          value={params} 
          onChange={(event) => setParams(event.target.value)}
          placeholder="Search for"
        />
        <S.Button type="submit" onClick = {() => onSearchGames()}>
          <SearchIcon />
        </S.Button>
      </S.WrapperForm>
    </S.Container>
  );
};

Search.propTypes = () => ({
  handleSubmit: PropTypes.func.isRequired,
});

export default Search;
