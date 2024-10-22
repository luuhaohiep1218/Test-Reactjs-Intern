import { useState } from "react";
import "./Input.css";
interface IProps {
  placeholder: string;
  type: string;
  searchTitle: string;
  setSearchTitle: any;
}
const InputApp = (props: IProps) => {
  const { placeholder, type, searchTitle, setSearchTitle } = props;
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="input mb-4"
      value={searchTitle}
      onChange={(e) => setSearchTitle(e.target.value)}
    />
  );
};
export default InputApp;
