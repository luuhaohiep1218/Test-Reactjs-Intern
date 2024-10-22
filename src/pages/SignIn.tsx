import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "../GlobalStyles/SignIn.css";

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ButtonApp from "../components/Button";
import { Button } from "antd";
import { log } from "console";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const handleLogin = async () => {
    try {
      if (!username) {
        setErr("Please enter into this field.");
        return;
      }
      const response = await axios.post(
        "https://api-test-web.agiletech.vn/auth/login",
        {
          headers: {
            accept: "application/json",
            ContentType: "application/json",
          },
          username: username,
        }
      );
      console.log(response.data);

      if (response && response.data) {
        localStorage.setItem("login", JSON.stringify(response.data));
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container className="my-4">
        <Header />
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
