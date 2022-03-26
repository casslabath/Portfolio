import React from "react";
import * as S from "../styles";
import styled from "styled-components";
import LinkButton from "../Components/LinkButton";

const StyledContainer = styled.div`
  margin-left: 64px;
  width: 30%;
`;

const Home = () => {
  return (
    <StyledContainer>
      <S.H1>
        {"hello"}
        <span className="last-word">{"world"}</span>
      </S.H1>
      <S.H2>
        {"I'm Cassie Labath,"}
        <br />
        {"Software Engineer"}
      </S.H2>
      <LinkButton path={'/connect'} text="Contact Me" />
    </StyledContainer>
  );
};

export default Home;
