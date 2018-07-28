import axios from "axios";

const AllGroupRequest = ()=>{
  return axios
  .get("/api/all_groups")
  .then(res=>{
    console.log("res ")
    return res.data;
  })
  .catch(err=>{
    console.log(err);
  })
}

export default AllGroupRequest;