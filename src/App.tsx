import Home from "./Pages/Home";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Connect from "./Pages/Connect";
import { NavigationContext, NavigationProvider } from "./Contexts/NavigationContext";

const StyledBody = styled.body`
  color: #4f5d73;
  font-family: "Roboto", sans-serif;
  position: relative;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
`;

const StyledVector = styled.div`
    position: absolute;
    top: 64px;
    right: 0;
    z-index: -1;
`;

document.body.style.backgroundColor = "#f7f7f7";
document.body.style.margin = "0";

const App: React.FC = () => {
  return (
    <StyledBody>
      <NavigationProvider>
        <Router>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
            <StyledVector>
            <svg width="730" height="671" viewBox="0 0 730 671" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M317.5 186.236C246.679 56.3164 129.159 152.775 0 0H730V684.5C574 752.131 501.532 678.061 405.5 546.729C309.468 415.397 388.321 316.156 317.5 186.236Z" fill="#A9DAD0"/>
  </svg>
            </StyledVector>
          </main>
        </Router>
      </NavigationProvider>
    </StyledBody>
  );
};

export default App;
