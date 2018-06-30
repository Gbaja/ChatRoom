import axios from "axios";

const LoginRequest = ( data )=>{
  axios.post("/api/login", data)
        .then(res => [
          console.log(res.data)
        ])
};

export default LoginRequest;