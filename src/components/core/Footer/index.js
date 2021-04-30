import React from "react";
import PropTypes from "prop-types";
import Logo from "components/core/Logo";
import { footer } from "utils/data/footer-mock.json";
import * as S from "./styled";

const Footer = () => (
  <S.FooterWrapper>
    <S.ConteinerLogo>
      <Logo 
        color="#242424" 
        icon={footer.icon} 
        title={footer.title} 
      />
    </S.ConteinerLogo>
    <S.WrapperSection>
      {footer.section.map(({ title, info }, index) => (
        <S.WrapperInformation key={index}>
          <h3>{title}</h3>
          <S.Content />
          {info.map((redirect) => (
            <S.WrapperText key={redirect.text}>
              {redirect.link
                ?
                <a href={redirect.link}>{redirect.text}</a>
                :
                <p>{redirect.text}</p>}
            </S.WrapperText>
          ))}
        </S.WrapperInformation>
      ))}
    </S.WrapperSection>
    <S.Phrase>{footer.pharse}</S.Phrase>
  </S.FooterWrapper>
);

Footer.propTypes = {
  footer: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    section: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        info: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string,
          }),
        ),
      }).isRequired,
    ),
    pharse: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
