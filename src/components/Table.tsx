import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ModalEditPost from "./ModalEditPost";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("login") || "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePosts = await axios.get(
          `https://api-test-web.agiletech.vn/posts?title=${searchTitle}&page=${currentPage}`,
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
        setTotal(responsePosts.data.total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user.accessToken, posts]);

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
          <EditOutlined onClick={() => setIsModalEditOpen(true)} />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={posts}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: total, // Tổng số bài viết (số lượng từ API)
          onChange: (page, pageSize) => {
            setCurrentPage(page);
          },
        }}
      />
      <ModalEditPost
        setIsModalEditOpen={setIsModalEditOpen}
        isModalEditOpen={isModalEditOpen}
      />
    </>
  );
};
export default TableApp;
