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

type LinkButtonProps = {
    logo?: HTMLImageElement;
    path: string;
    text?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({logo, path, text}: LinkButtonProps) => {
    const {setCurrentPath} = useContext(NavigationContext);

    if (logo) {
        return (
            <Link to={path}>
                <StyledButton onClick={() => setCurrentPath(path)}>
                    {text}
                </StyledButton>
            </Link>
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