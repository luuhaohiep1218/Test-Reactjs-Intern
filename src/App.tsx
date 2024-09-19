import { Container } from "react-bootstrap";
import Header from "./layouts/Header";
import HomeNotSignIn from "./pages/HomePage";
import Footer from "./layouts/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

import "./GlobalStyles/GlobalStyles.css";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeNotSignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
