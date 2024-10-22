import { Link } from "react-router-dom";
import "../GlobalStyles/Profile.css";
import { Col, Container, Row } from "react-bootstrap";
import ButtonApp from "../components/Button";
import InputApp from "../components/InputApp/Input";
import { Button, Select, SelectProps } from "antd";
import TableApp from "../components/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { log } from "console";
import ModalAddPost from "../components/ModalAddPost";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tags, setTags] = useState<string[]>([]);

  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("");

  const options: SelectProps["options"] = [];
  for (let i = 1; i < tags.length; i++) {
    options.push({
      value: tags[i],
      label: tags[i],
    });
  }

  const handleChange = (value: string) => {
    setSearchTag(value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const user = JSON.parse(localStorage.getItem("login") || "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTags = await axios.get(
          `https://api-test-web.agiletech.vn/posts/tags`,
          {
            headers: {
              accept: "accept: */*",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setTags(responseTags.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user.accessToken]);

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
                <Button
                  style={{
                    backgroundColor: "#894DDB",
                    height: "50px",
                    width: "213px",
                  }}
                  block
                  type="primary"
                  shape="round"
                  size={"large"}
                  onClick={showModal}
                >
                  Add new
                </Button>
              </div>
            </Col>
            <Col xl={3}>
              <InputApp
                placeholder="Title"
                type="text"
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
              />
            </Col>
            <Col xl={3}>
              <Select
                mode="tags"
                style={{ width: "100%" }}
                onChange={handleChange}
                tokenSeparators={[","]}
                options={options}
              />
            </Col>
          </Row>
          <Row className="mx-5 px-4">
            <TableApp searchTitle={searchTitle} searchTag={searchTag} />
          </Row>
        </Col>
      </Row>
      <ModalAddPost
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tags={tags}
      />
    </>
  );
};
export default Profile;
