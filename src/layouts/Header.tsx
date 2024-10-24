import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, SpringValue } from "@react-spring/web";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import ButtonApp from "../components/Button";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/Api";

const Header = () => {
  const navigate = useNavigate();
  //Animation for header
  const [show, setShow] = useState<boolean>(false);
  const springOpacity = new SpringValue(0);

  useEffect(() => {
    setInterval(() => {
      springOpacity.start(show ? 0 : 1);
      setShow(true);
    }, 300);
  });
  const springs = useSpring({
    from: { y: 0 },
    to: { y: 50 },
    delay: 300,
  });

  //Header for Login
  const user = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login") || "")
    : null;

  const handleUserLogout = async () => {
    await handleLogout(user.accessToken);
    navigate("/");
  };

  return (
    <>
      {show && (
        <animated.div className="mx-5" style={{ ...springs }}>
          <Navbar className="d-block">
            <div>
              <Row>
                <Col xl={7} lg={9} md={9} sm={8} xs={7}>
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
                {!user && (
                  <Col
                    xl={3}
                    lg={3}
                    md={3}
                    sm={4}
                    xs={5}
                    style={{ marginLeft: "auto" }}
                  >
                    <Link to={"/signin"}>
                      <ButtonApp title="Sign In" size="large" />
                    </Link>
                  </Col>
                )}
                {user && (
                  <Col xl={4} lg={3} md={3} sm={4} xs={5} className="d-flex">
                    <Link to={"/profile"} className="mx-2">
                      <ButtonApp title="Profile" size="large" />
                    </Link>

                    <div>
                      <Button
                        style={{
                          backgroundColor: "#894DDB",
                          height: "50px",
                          width: "213px",
                        }}
                        block
                        type="primary"
                        shape="round"
                        size="large"
                        onClick={() => handleUserLogout()}
                      >
                        Logout
                      </Button>
                    </div>
                  </Col>
                )}
              </Row>
            </div>
          </Navbar>
        </animated.div>
      )}
    </>
  );
};

export default Header;
