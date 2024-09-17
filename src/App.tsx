import { Container } from "react-bootstrap";
import Header from "./layouts/Header";
import HomeNotSignIn from "./pages/HomeNotSignIn";
import Footer from "./layouts/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

import "./GlobalStyles/GlobalStyles.css";

function App() {
  return (
    <Router>
      <div className="App my-4">
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<HomeNotSignIn />} />
          </Routes>
          <hr />
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
