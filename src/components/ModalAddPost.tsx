import { Modal } from "antd";
import FormAddPost from "./FormAddPost";

const ModalAddPost = (props: any) => {
  const { isModalOpen, setIsModalOpen, tags, fetchData } = props;

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
      <FormAddPost
        tagsPost={tags}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        fetchData={fetchData}
      />
    </Modal>
  );
};
export default ModalAddPost;
