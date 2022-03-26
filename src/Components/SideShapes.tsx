import React, { useContext } from 'react';
import { NavigationContext } from '../Contexts/NavigationContext';
import styled from 'styled-components';

const StyledVector = styled.div`
    position: absolute;
    top: 64px;
    right: 0;
    z-index: -1;
`;

const SideShapes = () => {
    const {currentPath} = useContext(NavigationContext);

    if(currentPath === '/' || currentPath === '/connect') {
        return (
            <StyledVector>
                <svg width="1025" height="710" viewBox="0 0 1025 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M839.763 296.623C968.986 230.459 873.045 120.666 1025 0V682H344.174C310.908 531.337 350.579 468.554 481.206 378.837C611.833 289.12 710.541 362.787 839.763 296.623Z" fill="#F37781"/>
                <path d="M445.805 186.236C346.365 56.3164 181.353 152.775 0 0H1025V684.5C805.959 752.131 704.205 678.061 569.366 546.729C434.528 415.397 545.245 316.156 445.805 186.236Z" fill="#A9DAD0"/>
                </svg>
            </StyledVector>
        )
    }

    return (
        <StyledVector>
            <svg width="1025" height="710" viewBox="0 0 1025 710" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M445.805 186.236C346.365 56.3164 181.353 152.775 0 0H1025V684.5C805.959 752.131 704.205 678.061 569.366 546.729C434.528 415.397 545.245 316.156 445.805 186.236Z" fill="#A9DAD0"/>
            </svg>
        </StyledVector>
    )
};

export default SideShapes;