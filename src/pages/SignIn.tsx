import { useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "../GlobalStyles/SignIn.css";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ButtonApp from "../components/Button";
import { Button, message } from "antd";
import { log } from "console";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/Api";

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const handleLogin = async () => {
    try {
      if (!username) {
        setErr("Please enter into this field.");
        return;
      }
      const signIn = await login(username);

      console.log(signIn);

      if (signIn && signIn?.accessToken) {
        localStorage.setItem("login", JSON.stringify(signIn));
        navigate("/");
      } else {
        message.error("Login fail!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container className="my-4">
        <Row>
          <Col>
            <Navbar.Brand>
              <Link to={"/"}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgB7ZhNbtpAFMf/b0ylfkgt7CvFOUFyhOzSdhNygkBCpdAVPQHOCZKsEkUg4ASw6scuvQE3gNBVV1BVbVQp9uubgUTko8XYow6K8lswxh77zZ83M/7zCAvCsNLOqh/Pthi8BuZVEHxzgdEFUV8Bnef19dZd9xIWgOHOhzzBa8iIszO6ihgKbopRcMz37c/7BNWOIUDjR+Cm3FOdPuk0E3owTBwgAUR08KK2/t4cwxHD7Y8FGUgDKWBEm7n6m44zEaOdTz1pfKSCRhz+WvbggEkWCkjPY9Cjb04WtgjYgD3W3OxOjFVYgggrbkRQ2rVwDd/5e8IGDyIWhQcRi0LmrpONSi8bnme2oMQWw2yHvrlA3AVTX7R3SkcvW1gQbtmOWnmQl0Z7mpm2WMQEScSI5WBY5Np0qpcH+9KILUYsWwxEzfq7r1U45kqEHoz8PBXMCTMHE/HOMCJOdgcFPRgkRIuvlXt5OMKIUAQLU8Jr6A0BDlA6C4AVL5O9+K0KcICSLNizxWy25P+OTCfyYQkitQIHiAi25u0BqxY7NvfEO7F+89pCbEmsbhZjMnWloIZ4geM8j/ksVkebMcFnikP+AksQZdpx+jHDWkyPqK0yT6OmHI+Qnn5sMxidN3XNCGmRaanrsqp4sCwPC4tIjQri9sw1N0dsIaYiCkyrP0pHyx3J8SESImthb15LrsuP4rmSxyTeu6yOX22xpeOlih4M5kXEvz1eCpCAXP1VRQ8GcyI12MNc7XVw+f3Wn6KT3V5BkacNoY9/Y6ahyWJKTFkTVJ1Zj2KpvVJY1FmcPv3XgvJEjPgq9qXb+K2u93e9PUZ06j25aI3Xkz3GNVq1Idn1Jc5UTOqKyNMo/NnS6+nmfX8AK8/tG1ht4o0AAAAASUVORK5CYII="
                  className="d-inline-block align-top"
                  alt=""
                />
              </Link>
            </Navbar.Brand>
          </Col>
        </Row>
        <div className="p-5 my-5 text-center">
          <h1 className="fs-1 my-5">Sign In</h1>
          <div className="form text-center">
            <input
              placeholder={"Username"}
              type={"text"}
              className="input mb-4"
              onChange={(e) => setUsername(e.target.value)}
            />
            {err && <p style={{ color: "red" }}>{err}</p>}
            <div className="form-btn">
              {/* <ButtonApp title="Sign In" size="large" /> */}
              <Button
                style={{ backgroundColor: "#894DDB", height: "50px" }}
                block
                type="primary"
                shape="round"
                size={"large"}
                onClick={() => handleLogin()}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default SignIn;
