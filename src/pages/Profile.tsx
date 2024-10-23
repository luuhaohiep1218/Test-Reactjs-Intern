import { Link, useNavigate } from "react-router-dom";
import "../GlobalStyles/Profile.css";
import { Col, Row } from "react-bootstrap";
import InputApp from "../components/InputApp/Input";
import { Button, Select, SelectProps } from "antd";
import TableApp from "../components/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalAddPost from "../components/ModalAddPost";
import {
  fetchPosts,
  fetchPostsSearch,
  fetchTags,
  handleLogout,
} from "../utils/Api";

interface DataType {
  id: string;
  title: string;
  tags: { tag: string }[];
  description: string;
}

const Profile = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login") || "")
    : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("");
  const [posts, setPosts] = useState<DataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user === null) {
      navigate("/sigin"); // Chuyển hướng tới trang login
    }
  }, [user, navigate]);

  useEffect(() => {
    const getTags = async () => {
      const tagsData = await fetchTags();
      setTags(tagsData);
    };
    getTags();
  }, [tags]);

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

  const fetchData = async () => {
    try {
      const dataPost = await fetchPostsSearch(searchTitle, currentPage);

      const formattedPosts: DataType[] = dataPost.posts.map((post: any) => ({
        id: post.id,
        title: post.title,
        tags: post.tags.map((t: any) => ({ tag: t.tag || t })),
        description: post.description,
      }));

      const filteredPosts =
        searchTag && searchTag.length > 0
          ? formattedPosts.filter((post) =>
              post.tags.some((tagObj) => searchTag.includes(tagObj.tag))
            )
          : formattedPosts;

      setPosts(filteredPosts);
      setTotal(dataPost.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
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
            <div
              className="my-2"
              onClick={() => {
                handleLogout();
              }}
            >
              Log Out
            </div>
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
            <TableApp
              searchTitle={searchTitle}
              searchTag={searchTag}
              tags={tags}
              fetchData={fetchData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={total}
              posts={posts}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />
          </Row>
        </Col>
      </Row>
      <ModalAddPost
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tags={tags}
        fetchData={fetchData}
      />
    </>
  );
};
export default Profile;
