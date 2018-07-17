import { withFormik } from "formik";
import * as Yup from "yup";

import AddNewGroupForm from "./AddNewGroupForm";
import newGroupRequest from "../../Request/new_group_request";

const FormikAddNewGroup = withFormik({
  mapPropsToValues({ name, description }) {
    return {
      name: name || "",
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("name is required"),
    description: Yup.string().required("Please enter a description!")
  }),
  handleSubmit(values, { props, setStatus }) {
    values.created_by_id = props.match.params.user_id;
    console.log(props);
    console.log(values);
    newGroupRequest(values).then(res => {
      if (res.status === 422) {
        setStatus(res.data.message);
        return;
      }
      setStatus(res.message);
    });
  }
})(AddNewGroupForm);

export default FormikAddNewGroup;
