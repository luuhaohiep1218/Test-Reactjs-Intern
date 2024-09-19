import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import "../GlobalStyles/SignIn.css";
import ButtonApp from "../components/Button";
import { Container } from "react-bootstrap";
import InputApp from "../components/InputApp/Input";

const SignIn = () => {
  return (
    <>
      <Container className="my-4">
        <Header page="SignIn" />
        <div className="p-5 my-5 text-center">
          <h1 className="fs-1 my-5">Sign In</h1>
          <div className="form text-center">
            <InputApp placeholder="Username" type="text" />
            <div className="form-btn">
              <ButtonApp title="Sign In" size="large" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default SignIn;
