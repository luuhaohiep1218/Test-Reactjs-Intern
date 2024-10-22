import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  Select,
  message,
} from "antd";
import axios from "axios";
import { useEffect } from "react";

const FormAddPost = (props: any) => {
  const [form] = Form.useForm();

  const { tagsPost, setIsModalOpen } = props;
  const { Option } = Select;

  type FieldType = {
    title?: string;
    description?: string;
    tags?: string[];
  };
  const user = JSON.parse(localStorage.getItem("login") || "");

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { title, description, tags } = values;
    try {
      const res = await axios.post(
        "https://api-test-web.agiletech.vn/posts",
        {
          title,
          description,
          tags: Array.isArray(tags) ? tags : [tags], // Đảm bảo tags là một mảng
        },
        {
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${user.accessToken}`,
            "Content-Type": "application/json", // Đúng định dạng Content-Type
          },
        }
      );
      if (res?.data) {
        setIsModalOpen(false);
        form.resetFields();
        message.success("Create new a post");
      }
    } catch (error) {}
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (value: string) => {};
  return (
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
        rules={[{ required: true, message: "Please input your description!" }]}
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
  );
};
export default FormAddPost;
function fetchData() {
  throw new Error("Function not implemented.");
}
