import axios from "axios";

const LoginRequest = data => {
  return axios
    .post("/api/login", data)
    .then(res => {
      console.log("LOG IN RES: ", res.data);

      return res.data;
    })
    .catch(err => {
      if (err.response.status === 422) {
        return err.response;
      } else {
        console.log(err);
      }
    });
};

export default LoginRequest;
