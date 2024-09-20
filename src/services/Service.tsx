import axios from "axios";

const loginApi = (username: any) => {
  return axios.post("https://api-test-web.agiletech.vn/auth/login", username);
};

export { loginApi };
