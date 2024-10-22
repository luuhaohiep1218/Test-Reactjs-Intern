import { Button, Form, FormProps, Input, Modal, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ModalEditPost = (props: any) => {
  const { setIsModalEditOpen, isModalEditOpen } = props;
  const [tagsPost, setTagsPost] = useState<string[]>([]);
  const { Option } = Select;

  type FieldType = {
    title?: string;
    description?: string;
    tags?: string[];
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
        setTagsPost(responseTags.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleOk = () => {
    setIsModalEditOpen(false);
  };

  const handleCancel = () => {
    setIsModalEditOpen(false);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {};
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (value: string) => {};
  return (
    <Modal
      title="Basic Modal"
      open={isModalEditOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Tags"
          name="tags"
          rules={[{ required: true, message: "Please input your tags!" }]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            {tagsPost.map((tag: any) => {
              return <Option value={tag}>{tag}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalEditPost;
