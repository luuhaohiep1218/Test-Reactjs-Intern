import axios from "axios";
import { useNavigate } from "react-router-dom";

const user = localStorage.getItem("login")
  ? JSON.parse(localStorage.getItem("login") || "")
  : null;
export const fetchTags = async () => {
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
    if (responseTags?.data) {
      return responseTags?.data;
    } else {
      throw new Error("Error!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchPosts = async () => {
  try {
    if (!user) {
      return;
    }
    const response = await axios.get(
      "https://api-test-web.agiletech.vn/posts",
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Failed to fetch data: ", error);
    return [];
  }
};

export const fetchPostsSearch = async (searchTitle: any, currentPage: any) => {
  try {
    if (!user) {
      return;
    }
    const responsePosts = await axios.get(
      `https://api-test-web.agiletech.vn/posts?title=${searchTitle}&page=${currentPage}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    return responsePosts.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username: string) => {
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
  return response?.data;
};

export const handleAddPost = async (
  title: any,
  description: any,
  tags: any
) => {
  const res = await axios.post(
    "https://api-test-web.agiletech.vn/posts",
    {
      title,
      description,
      tags: Array.isArray(tags) ? tags : [tags],
    },
    {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const handleDeletePost = async (id: any) => {
  try {
    const res = await axios.delete(
      `https://api-test-web.agiletech.vn/posts/${id}`,
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const handleEditPost = async (
  id: any,
  title: any,
  description: any,
  tags: any
) => {
  try {
    const res = await axios.patch(
      `https://api-test-web.agiletech.vn/posts/${id}`,
      {
        title,
        description,
        tags: Array.isArray(tags) ? tags : [tags],
      },
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const handleLogout = async () => {
  try {
    const response = await axios.delete(
      "https://api-test-web.agiletech.vn/auth/logout",
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    localStorage.removeItem("login");
  } catch (error) {
    console.log(error);
  }
};
