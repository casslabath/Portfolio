import React, { useContext } from "react";
import { NavigationContext } from "../Contexts/NavigationContext";
import styled from "styled-components";

const StyledVector = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const StyledVectorBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -2;
`;

const SideShapes = () => {
  const { currentPath } = useContext(NavigationContext);

  if (currentPath === "/" || currentPath === "/connect") {
    return (
      <>
        <StyledVector>
          <svg
            width="1025"
            height="710"
            viewBox="0 0 1025 710"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M445.805 186.236C346.365 56.3164 181.353 152.775 0 0H1025V684.5C805.959 752.131 704.205 678.061 569.366 546.729C434.528 415.397 545.245 316.156 445.805 186.236Z"
              fill="#A9DAD0"
            />
          </svg>
        </StyledVector>
        <StyledVectorBottom>
          <svg
            width="692"
            height="711"
            viewBox="0 0 692 711"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M506.763 309.236C635.986 240.259 540.045 125.797 692 0V711H11.1741C-22.0919 553.931 17.5791 488.478 148.206 394.946C278.833 301.414 377.541 378.214 506.763 309.236Z"
              fill="#F37781"
            />
          </svg>
        </StyledVectorBottom>
      </>
    );
  }

  return (
    <StyledVector>
      <svg
        width="1025"
        height="710"
        viewBox="0 0 1025 710"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M445.805 186.236C346.365 56.3164 181.353 152.775 0 0H1025V684.5C805.959 752.131 704.205 678.061 569.366 546.729C434.528 415.397 545.245 316.156 445.805 186.236Z"
          fill="#A9DAD0"
        />
      </svg>
    </StyledVector>
  );
};

export default SideShapes;
