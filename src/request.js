import axios from "axios";

const LoginRequest = ( data )=>{
  return axios.post("/api/login", data)
        .then(res => {
         return res.data
        })
        .catch(err=>{
          if(err.response.status === 422){
            return err.response
          } else{
            console.log(err)
          }
        })
};

export default LoginRequest;