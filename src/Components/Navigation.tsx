import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #ffffff;
  height: 64px;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin-left: 24px;
`;

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <Link to={"/"}>Home</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={"/about"}>About Me</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={"/experience"}>Experience</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to={"/connect"}>Connect</Link>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navigation;
