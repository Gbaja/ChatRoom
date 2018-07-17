import { withFormik } from "formik";
import * as Yup from "yup";

import AddNewGroupForm from "./AddNewGroupForm";

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
    console.log(values);
  }
})(AddNewGroupForm);

export default FormikAddNewGroup;
