import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 64px;
`;

type RightImageProps = {
  alt?: string;
  src: string;
};

const RightImage: React.FC<RightImageProps> = ({ alt, src }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default RightImage;
