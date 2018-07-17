import axios from "axios";

const SignupRequest = ( data) =>{
  return axios.post ("/api/signup" , data)
  .then(res=>{
    return res.data
  })
  .catch(err=>{
    //err.response.status comes from backend
    console.log("err fro mackend",err.response)
    if(err.response.status === 422){
      return err.response
    }else{
      console.log(err)
    }
  })
};

export default SignupRequest;