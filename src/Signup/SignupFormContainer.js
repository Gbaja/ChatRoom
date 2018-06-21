import { withFormik } from "formik";
import * as Yup from "yup";

import SignupForm from "./SignupForm";

const FormikSignup = withFormik({
  mapPropsToValues({ name, userName, email, password, isExpert }) {
    return {
      name: name || "",
      userName: userName || "",
      email: email || "",
      password: password || "",
      isExpert: isExpert || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a name!"),
    userName: Yup.string().required("Please enter a userName!"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string().required("Please enter a password!"),
    isExpert: Yup.string().required("Please select a value")
  }),
  handleSubmit(values, { props, setStatus }) {
    console.log(values);
  }
})(SignupForm);

export default FormikSignup;
