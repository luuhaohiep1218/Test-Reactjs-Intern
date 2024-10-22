import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface IProps {
  title: string;
  size: SizeType;
}
const ButtonApp = (props: IProps) => {
  const { title, size } = props;
  return (
    <>
      <Button
        style={{ backgroundColor: "#894DDB", height: "50px", width: "213px" }}
        block
        type="primary"
        shape="round"
        size={size}
      >
        {title}
      </Button>
    </>
  );
};
export default ButtonApp;
