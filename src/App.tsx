import Home from "./Pages/Home";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Connect from "./Pages/Connect";

const StyledBody = styled.div`
  color: #4f5d73;
  font-family: "Roboto", sans-serif;
  top: -5px;
  position: relative;
`;

document.body.style.backgroundColor = "#f7f7f7";
document.body.style.margin = "0";

const App: React.FC = () => {
  return (
    <StyledBody>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </StyledBody>
  );
};

export default App;
