import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "../GlobalStyles/SignIn.css";

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ButtonApp from "../components/Button";
import { loginApi } from "../services/Service";
import { Button } from "antd";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const handleLogin = async () => {
    if (!username) {
      setErr("Please enter into this field.");
      return;
    }

    const request = new Request(
      "https://api-test-web.agiletech.vn/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ username: "admin" }),
      }
    );

    const response1 = await fetch(request);
    console.log(response1);
  };

  return (
    <>
      <Container className="my-4">
        <Header page="SignIn" />
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
