import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationContext } from '../Contexts/NavigationContext';

const StyledButton = styled.button`
    background-color: #4F5D73;
    border-radius: 16px;
    border-style: none;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    padding: 16px 24px;

    &:hover {
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    &:active {
        cursor: pointer;
        font-size: 18px;
        box-shadow: none;
    }
`;

const StyledLogoLink = styled.a`
    background-color: #4F5D73;
    border-radius: 16px;
    border-style: none;
    color: #ffffff;

    &:hover {
        cursor: pointer;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    &:active {
        cursor: pointer;
        box-shadow: none;
    }
`;

type LinkButtonProps = {
    alt?: string;
    logo?: string;
    path: string;
    text?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({alt, logo, path, text}: LinkButtonProps) => {
    const {setCurrentPath} = useContext(NavigationContext);

    if (logo) {
        return (
            <StyledLogoLink href={path} target={'_blank'} rel="noreferrer">
                    <img src={logo} alt={alt} />
            </StyledLogoLink>
        )
    }

    return (
        <Link to={path}>
            <StyledButton onClick={() => setCurrentPath(path)}>
                {text}
            </StyledButton>
        </Link>
    )

}

export default LinkButton;