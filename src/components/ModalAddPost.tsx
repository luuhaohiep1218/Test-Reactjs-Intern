import { Modal } from "antd";
import FormAddPost from "./FormAddPost";
import { useState } from "react";

const ModalAddPost = (props: any) => {
  const { isModalOpen, setIsModalOpen, tags } = props;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Add new post"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
    >
      <FormAddPost tagsPost={tags} setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};
export default ModalAddPost;
