import "./Input.css";
interface IProps {
  placeholder: string;
  type: string;
}
const InputApp = (props: IProps) => {
  const { placeholder, type } = props;
  return <input placeholder={placeholder} type={type} className="input mb-4" />;
};
export default InputApp;
