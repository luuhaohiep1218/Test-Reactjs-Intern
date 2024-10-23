import {
  Button,
  Form,
  FormProps,
  Input,
  Modal,
  Select,
  SelectProps,
  message,
} from "antd";
import axios from "axios";
import { useEffect } from "react";
import { handleEditPost } from "../utils/Api";

const ModalEditPost = (props: any) => {
  const [form] = Form.useForm();

  const { setIsModalEditOpen, isModalEditOpen, editPost, refreshData, tags } =
    props;

  const { Option } = Select;
  type FieldType = {
    title?: string;
    description?: string;
    tags?: string[];
  };

  if (!isModalEditOpen) {
    form.resetFields();
  }

  const user = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login") || "")
    : null;
  useEffect(() => {
    if (isModalEditOpen && editPost) {
      form.setFieldsValue({
        title: editPost?.title,
        description: editPost?.description,
        tags: editPost?.tags.map((tagObj: { tag: string }) => tagObj.tag) || [],
      });
    } else {
      form.resetFields(); // Reset fields if modal is closed or no editPost
    }
  }, [isModalEditOpen, editPost, form]);

  const handleOk = () => {
    form.resetFields();
    setIsModalEditOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalEditOpen(false);
  };
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { title, description, tags } = values;
    const handleEdit = await handleEditPost(
      editPost?.id,
      title,
      description,
      tags,
      user.accessToken
    );
    if (handleEdit) {
      setIsModalEditOpen(false);
      form.resetFields();
      message.success("Edit a post success");
      refreshData();
    } else {
      setIsModalEditOpen(false);
      form.resetFields();
      message.error("Edit a post error!");
    }
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const options: SelectProps["options"] = [];
  for (let i = 1; i < tags.length; i++) {
    options.push({
      value: tags[i],
      label: tags[i],
    });
  }

  const handleChange = (value: string) => {};

  return (
    <Modal
      title="Basic Modal"
      open={isModalEditOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
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
          {/* <Select
            placeholder="Select a option and change input text above"
            onChange={handleChange}
            allowClear
          >
            {tags.map((tag: any) => {
              return (
                <Option key={tag} value={tag}>
                  {tag}
                </Option>
              );
            })}
          </Select> */}
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
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
    </Modal>
  );
};
export default ModalEditPost;
