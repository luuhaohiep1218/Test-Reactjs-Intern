import React, { useEffect, useState } from "react";
import { Popconfirm, Space, Table, Tag, message } from "antd";
import type { PopconfirmProps, TableProps } from "antd";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ModalEditPost from "./ModalEditPost";
import { handleDeletePost } from "../utils/Api";

interface DataType {
  id: string;
  title: string;
  tags: { tag: string }[];
  description: string;
}

const TableApp = (props: any) => {
  const {
    searchTitle,
    searchTag,
    tags,
    fetchData,
    currentPage,
    total,
    setCurrentPage,
    posts,
    pageSize,
  } = props;

  const [deletePostId, setDeletePostId] = useState<string>("");

  const [editPost, setEditPost] = useState<DataType | undefined>(undefined);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const user = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login") || "")
    : null;

  useEffect(() => {
    fetchData();
  }, [user.accessToken, searchTitle, searchTag, currentPage]);

  const handleEditPost = (id: string) => {
    const findPost = posts.find((post: { id: string }) => post.id === id);
    setEditPost(findPost);
    setIsModalEditOpen(true);
  };

  const confirm: PopconfirmProps["onConfirm"] = async (e) => {
    const deletePost = await handleDeletePost(deletePostId);
    if (deletePost) {
      message.success("Delete successful");
      fetchData();
    } else {
      message.error("Delete error!");
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    message.error("Delete fail");
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      // hidden: true,
    },
    // {
    //   title: "No",
    //   dataIndex: "no",
    //   key: "no",
    //   rowScope: "row",
    //   render: (_, __, index) => (
    //     <span>{(currentPage - 1) * pageSize + index + 1}</span>
    //   ),
    // },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
      render: (_, { id }) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleEditPost(id)} />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined onClick={() => setDeletePostId(id)} />
          </Popconfirm>
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
          total: total, // Tổng số bài viết (số lượng từ API)
          onChange: (page, pageSize) => {
            setCurrentPage(page);
          },
        }}
      />
      {editPost && (
        <ModalEditPost
          setIsModalEditOpen={setIsModalEditOpen}
          isModalEditOpen={isModalEditOpen}
          editPost={editPost}
          refreshData={fetchData}
          tags={tags}
        />
      )}
    </>
  );
};
export default TableApp;
