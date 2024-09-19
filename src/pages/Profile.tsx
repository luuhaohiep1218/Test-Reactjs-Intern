import { Link } from "react-router-dom";
import "../GlobalStyles/Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import ButtonApp from "../components/Button";
import InputApp from "../components/InputApp/Input";
import { Select } from "antd";
import TableApp from "../components/Table";

const Profile = () => {
  return (
    <>
      {/* <div className="d-flex w-100">
        <div className="navbar-profile bg-dark-subtle">
          <div className="text-center">
            <Link to={"/"}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgB7ZhNbtpAFMf/b0ylfkgt7CvFOUFyhOzSdhNygkBCpdAVPQHOCZKsEkUg4ASw6scuvQE3gNBVV1BVbVQp9uubgUTko8XYow6K8lswxh77zZ83M/7zCAvCsNLOqh/Pthi8BuZVEHxzgdEFUV8Bnef19dZd9xIWgOHOhzzBa8iIszO6ihgKbopRcMz37c/7BNWOIUDjR+Cm3FOdPuk0E3owTBwgAUR08KK2/t4cwxHD7Y8FGUgDKWBEm7n6m44zEaOdTz1pfKSCRhz+WvbggEkWCkjPY9Cjb04WtgjYgD3W3OxOjFVYgggrbkRQ2rVwDd/5e8IGDyIWhQcRi0LmrpONSi8bnme2oMQWw2yHvrlA3AVTX7R3SkcvW1gQbtmOWnmQl0Z7mpm2WMQEScSI5WBY5Np0qpcH+9KILUYsWwxEzfq7r1U45kqEHoz8PBXMCTMHE/HOMCJOdgcFPRgkRIuvlXt5OMKIUAQLU8Jr6A0BDlA6C4AVL5O9+K0KcICSLNizxWy25P+OTCfyYQkitQIHiAi25u0BqxY7NvfEO7F+89pCbEmsbhZjMnWloIZ4geM8j/ksVkebMcFnikP+AksQZdpx+jHDWkyPqK0yT6OmHI+Qnn5sMxidN3XNCGmRaanrsqp4sCwPC4tIjQri9sw1N0dsIaYiCkyrP0pHyx3J8SESImthb15LrsuP4rmSxyTeu6yOX22xpeOlih4M5kXEvz1eCpCAXP1VRQ8GcyI12MNc7XVw+f3Wn6KT3V5BkacNoY9/Y6ahyWJKTFkTVJ1Zj2KpvVJY1FmcPv3XgvJEjPgq9qXb+K2u93e9PUZ06j25aI3Xkz3GNVq1Idn1Jc5UTOqKyNMo/NnS6+nmfX8AK8/tG1ht4o0AAAAASUVORK5CYII="
                className="my-4"
                alt=""
              />
            </Link>
          </div>
          <div className="tags mx-5 fs-5">
            <div className="my-2">Post</div>
            <div className="my-2">Log Out</div>
          </div>
        </div>
        <div className="content-profile ">
          <Container>
            <Row>
              <Col xl={5}>
                <div>
                  <ButtonApp title="Add new" size="large" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}
      <Row>
        <Col xl={2} className="navbar-profile bg-dark-subtle ">
          <div className="text-center">
            <Link to={"/"}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgB7ZhNbtpAFMf/b0ylfkgt7CvFOUFyhOzSdhNygkBCpdAVPQHOCZKsEkUg4ASw6scuvQE3gNBVV1BVbVQp9uubgUTko8XYow6K8lswxh77zZ83M/7zCAvCsNLOqh/Pthi8BuZVEHxzgdEFUV8Bnef19dZd9xIWgOHOhzzBa8iIszO6ihgKbopRcMz37c/7BNWOIUDjR+Cm3FOdPuk0E3owTBwgAUR08KK2/t4cwxHD7Y8FGUgDKWBEm7n6m44zEaOdTz1pfKSCRhz+WvbggEkWCkjPY9Cjb04WtgjYgD3W3OxOjFVYgggrbkRQ2rVwDd/5e8IGDyIWhQcRi0LmrpONSi8bnme2oMQWw2yHvrlA3AVTX7R3SkcvW1gQbtmOWnmQl0Z7mpm2WMQEScSI5WBY5Np0qpcH+9KILUYsWwxEzfq7r1U45kqEHoz8PBXMCTMHE/HOMCJOdgcFPRgkRIuvlXt5OMKIUAQLU8Jr6A0BDlA6C4AVL5O9+K0KcICSLNizxWy25P+OTCfyYQkitQIHiAi25u0BqxY7NvfEO7F+89pCbEmsbhZjMnWloIZ4geM8j/ksVkebMcFnikP+AksQZdpx+jHDWkyPqK0yT6OmHI+Qnn5sMxidN3XNCGmRaanrsqp4sCwPC4tIjQri9sw1N0dsIaYiCkyrP0pHyx3J8SESImthb15LrsuP4rmSxyTeu6yOX22xpeOlih4M5kXEvz1eCpCAXP1VRQ8GcyI12MNc7XVw+f3Wn6KT3V5BkacNoY9/Y6ahyWJKTFkTVJ1Zj2KpvVJY1FmcPv3XgvJEjPgq9qXb+K2u93e9PUZ06j25aI3Xkz3GNVq1Idn1Jc5UTOqKyNMo/NnS6+nmfX8AK8/tG1ht4o0AAAAASUVORK5CYII="
                className="my-4"
                alt=""
              />
            </Link>
          </div>
          <div className="tags mx-5 fs-5">
            <div className="my-2">Post</div>
            <div className="my-2">Log Out</div>
          </div>
        </Col>
        <Col xl={10}>
          <Row className="mx-5 mt-4 p-4">
            <Col xl={6}>
              <div className="add-btn">
                <ButtonApp title="Add new" size="large" />
              </div>
            </Col>
            <Col xl={3}>
              <InputApp placeholder="Title" type="text" />
            </Col>
            <Col xl={3}>
              <Select
                showSearch
                size="large"
                style={{ width: 226, height: 45 }}
                placeholder="Search to Select"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row className="mx-5 px-4">
            <TableApp />
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Profile;
