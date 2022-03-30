import React from "react";
import styled from "styled-components";
import * as S from "../styles";
import LinkButton from "../Components/LinkButton";
import RightImage from "../Components/RightImage";

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: 64px;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMe = () => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <S.H1>
          {"about"}
          <span className="last-word">{"me"}</span>
        </S.H1>
        <S.H2>{"I am a software engineer with an eye for design!"}</S.H2>
        <S.P>
          {
            "As a full stack software engineer, I love learning and working in different parts of the codebase, continually challenging myself in new ways. With my specialty in front-end development, I love to design and build software for users from all walks of life."
          }
        </S.P>
      </StyledTextContainer>
      <RightImage
        alt={"image of me on the Puget Sound beach"}
        src={"/assets/cassie-seattle.png"}
      />
    </StyledContainer>
  );
};

export default AboutMe;
