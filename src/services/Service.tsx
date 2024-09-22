import axios from "axios";

const loginApi = async (username: any) => {
  const request = new Request("https://api-test-web.agiletech.vn/auth/login", {
    method: "POST",
    body: JSON.stringify({ username: username }),
  });

  const response1 = await fetch(request);
  console.log(response1.status);
};

export { loginApi };
