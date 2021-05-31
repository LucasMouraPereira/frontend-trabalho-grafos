import React, {useState, useContext} from "react";

import Profile from "utils/static/svg/profile.svg";
import ArrowDown from "utils/static/svg/arrow-down.svg";

import { AuthContext } from "contexts/AuthContext"; 

import * as S from "./styled";

const UsersSection = () => {
  const { users, logout } = useContext(AuthContext);
  const [isActiveDropDrown, setIsActiveDropDrown] = useState(false);
  return (
    <>
      <S.WrapperUsers>
        <Profile />
        <h3>{users?.user?.name.split(" ").slice(0, 1).join(" ")}</h3>
        <div aria-hidden="true" onClick={() => setIsActiveDropDrown(!isActiveDropDrown)}>
          <ArrowDown />
        </div>
      </S.WrapperUsers>
      <S.WrapperDropDrown isActive={isActiveDropDrown}> 
        <S.SectionProfile>
          <p>{users?.user?.name}</p>
        </S.SectionProfile>
        <S.SectionProfile>
          <p>{users?.user?.email}</p>
        </S.SectionProfile>
        <S.SectionLogout role="presentation" onClick={logout}>
          <p>LOGOUT</p>
        </S.SectionLogout>
      </S.WrapperDropDrown>

    </>
  );
};

export default UsersSection;
