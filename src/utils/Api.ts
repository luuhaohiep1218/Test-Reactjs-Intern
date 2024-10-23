import axios from "axios";

export const fetchTags = async (token: any) => {
  try {
    const responseTags = await axios.get(
      `https://api-test-web.agiletech.vn/posts/tags`,
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
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
  tags: any,
  token: any
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
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const handleDeletePost = async (id: any, token: any) => {
  try {
    const res = await axios.delete(
      `https://api-test-web.agiletech.vn/posts/${id}`,
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
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
  tags: any,
  token: any
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
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const handleLogout = async (token: any) => {
  try {
    const response = await axios.delete(
      "https://api-test-web.agiletech.vn/auth/logout",
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      localStorage.removeItem("login");
    } else {
      console.error("Failed to log out: ", response.status);
    }
  } catch (error) {
    console.error("Logout error: ", error);
  }
};
