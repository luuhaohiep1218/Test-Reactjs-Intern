import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface DataType {
  id: string;
  title: string;
  tags: { tag: string }[];
  description: string;
}
interface IProps {
  searchTitle: string;
  searchTag: string;
}

const TableApp = (props: IProps) => {
  const { searchTitle, searchTag } = props;
  const [posts, setPosts] = useState<DataType[] | undefined>([]);

  const user = JSON.parse(localStorage.getItem("login") || "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePosts = await axios.get(
          `https://api-test-web.agiletech.vn/posts?title=${searchTitle}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        console.log(responsePosts.data);

        const formattedPosts: DataType[] = responsePosts.data.posts.map(
          (post: any) => ({
            id: post.id,
            title: post.title,
            tags: post.tags.map((t: any) => ({ tag: t.tag || t })),
            description: post.description,
          })
        );

        const filteredPosts =
          searchTag && searchTag.length > 0
            ? formattedPosts.filter((post) =>
                post.tags.some((tagObj) => searchTag.includes(tagObj.tag))
              )
            : formattedPosts;

        setPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user.accessToken, searchTitle, searchTag, posts]);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tagObj) => {
            const tag = tagObj.tag;
            return <Tag key={tag}>{tag.toUpperCase()}</Tag>;
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={posts} />;
};
export default TableApp;
