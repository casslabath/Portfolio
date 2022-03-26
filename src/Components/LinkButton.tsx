import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationContext } from '../Contexts/NavigationContext';

const StyledButton = styled.button`
    background-color: #4F5D73;
    border-radius: 32px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: bold;
    padding: 19px 27px;
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