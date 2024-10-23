import {
  Button,
  Form,
  FormProps,
  Input,
  Select,
  SelectProps,
  message,
} from "antd";
import axios from "axios";
import { handleAddPost } from "../utils/Api";

const FormAddPost = (props: any) => {
  const [form] = Form.useForm();
  const { tagsPost, setIsModalOpen, isModalOpen, fetchData, token } = props;
  const { Option } = Select;

  type FieldType = {
    title?: string;
    description?: string;
    tags?: string[];
  };
  const user = JSON.parse(localStorage.getItem("login") || "");

  if (!isModalOpen) {
    form.resetFields();
  }

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { title, description, tags } = values;
    try {
      const addPost = await handleAddPost(title, description, tags, token);

      if (addPost) {
        setIsModalOpen(false);
        form.resetFields();
        message.success("Create new a post");
        fetchData();
      } else {
        form.resetFields();
        message.error("Create new a post fail!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const options: SelectProps["options"] = [];
  for (let i = 1; i < tagsPost.length; i++) {
    options.push({
      value: tagsPost[i],
      label: tagsPost[i],
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form
      form={form}
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
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          options={options}
        />
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
