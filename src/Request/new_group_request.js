import axios from "axios";

const NewGroupRequest = data => {
  return axios
    .post("/api/new_group", data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      if (err.response.status === 422) {
        return err.response;
      } else {
        console.log("new group request error : ", err);
      }
    });
};

export default NewGroupRequest;
