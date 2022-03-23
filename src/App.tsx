import Home from "./Pages/Home";
import styled from "styled-components";

const StyledBody = styled.body`
  color: #4f5d73;
  font-family: "Roboto", sans-serif;

  body {
    background-color: #f7f7f7;
  }
`;

const App: React.FC = () => {
  return (
    <StyledBody>
      <Home />
    </StyledBody>
  );
};

export default App;
