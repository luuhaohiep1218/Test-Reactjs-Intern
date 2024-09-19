import React from "react";
import { Avatar, Button } from "antd";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MessageFilled } from "@ant-design/icons";
import "../GlobalStyles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="mx-5 ">
        <Row>
          <Col
            xl={5}
            lg={12}
            className="text-xl-start text-lg-center text-md-center text-sm-center "
          >
            <div className="mb-5">
              <Link to={"/"}>
                <img
                  src="data:image/png;base64,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"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Link>
            </div>
            <div className="d-flex justify-content-xl-start justify-content-lg-center justify-content-sm-center">
              <div
                className="fw-semibold mb-3 fs-6"
                style={{ color: "rgb(33, 35, 83,1)", maxWidth: "260px" }}
              >
                Warehouse Society, 234 Bahagia Ave Street PRBW 29281
              </div>
            </div>

            <div className="fw-light fst-italic">info@warehouse.project</div>
            <div className="fw-light fst-italic">1-232-3434 (Main)</div>
          </Col>
          <Col
            xl={2}
            lg={12}
            className="text-lg-center text-md-center text-sm-center "
          >
            <div>
              <div
                className="fw-semibold my-4 fs-6"
                style={{ color: "rgb(33, 35, 83,1)" }}
              >
                About
              </div>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li className="mb-3 fs-6">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "rgb(33, 35, 83,1)",
                    }}
                  >
                    Profile
                  </Link>
                </li>
                <li className="mb-3 fs-6">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "rgb(33, 35, 83,1)",
                    }}
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-3 fs-6">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "rgb(33, 35, 83,1)",
                    }}
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-3 fs-6">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "rgb(33, 35, 83,1)",
                    }}
                  >
                    DW News
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            xl={2}
            lg={12}
            className="text-lg-center text-md-center text-sm-center "
          >
            <div
              className="fw-semibold my-4 fs-6"
              style={{ color: "rgb(33, 35, 83,1)" }}
            >
              Help
            </div>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li className="mb-3 fs-6">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "rgb(33, 35, 83,1)",
                  }}
                >
                  Support
                </Link>
              </li>
              <li className="mb-3 fs-6">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "rgb(33, 35, 83,1)",
                  }}
                >
                  Sign Up
                </Link>
              </li>
              <li className="mb-3 fs-6">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "rgb(33, 35, 83,1)",
                  }}
                >
                  Guide
                </Link>
              </li>
              <li className="mb-3 fs-6">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "rgb(33, 35, 83,1)",
                  }}
                >
                  Reports
                </Link>
              </li>
              <li className="mb-3 fs-6">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "rgb(33, 35, 83,1)",
                  }}
                >
                  Q & A
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            xl={3}
            lg={12}
            className="text-lg-center text-md-center text-sm-center "
          >
            <div
              className="fw-semibold my-4 fs-6"
              style={{ color: "rgb(33, 35, 83,1)" }}
            >
              Social Media
            </div>
            <div>
              <Avatar size={52} />
              <Avatar className="mx-2" size={52} />
              <Avatar className="mx-2" size={52} />
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-light fst-italic" style={{ maxWidth: "360px" }}>
              © Datawarehouse™, 2020. All rights reserved. Company Registration
              Number: 21479524.
            </p>
          </div>
          <div className="div-box-chat">
            <Button
              className="btn-box-chat"
              size="large"
              shape="circle"
              style={{ width: "60px", height: "60px" }}
              icon={
                <MessageFilled
                  className="icon-btn"
                  style={{ color: "#894DDB" }}
                />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
