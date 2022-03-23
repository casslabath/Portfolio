import React from "react";
import * as S from "../styles";

const Home = () => {
  return (
    <>
      <S.H1>
        {"hello"}
        <span className="last-word">{"world"}</span>
      </S.H1>
      <S.H2>
        {"I'm Cassie Labath,"}
        <br />
        {"Software Engineer"}
      </S.H2>
    </>
  );
};

export default Home;
