import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  align-items: center;
  background-color: #4F5D73;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  padding-right: 64px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin-left: 24px;

  .active-link {
    position: relative; 
    transition: background-color .5s;
    background-color: #ffffff;
    border-radius: 10px;
    color: #4f5d73;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: #ffffff;
  padding: 10px;
  text-decoration: none;
`;

const Navigation: React.FC = () => {
  const [currentLink, setCurrentLink] = useState('home');

  return (
    <StyledNav>
      <StyledList>
        <StyledListItem background-color={currentLink === 'home'  ? '#A9DAD0': ''}>
          <StyledLink 
            className={currentLink === 'home' ? 'active-link' : ''}
            onClick={() => setCurrentLink('home')} 
            to={"/"} 
          >
            Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            className={currentLink === 'about' ? 'active-link' : ''}
            to={"/about"}
            onClick={() => setCurrentLink('about')}
          >
            About Me
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            className={currentLink === 'experience' ? 'active-link' : ''}
            to={"/experience"} 
            onClick={() => setCurrentLink('experience')}
          >Experience</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            className={currentLink === 'connect' ? 'active-link' : ''}
            to={"/connect"}
            onClick={() => setCurrentLink('connect')}
          >Connect</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default Navigation;
