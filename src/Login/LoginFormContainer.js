import { withFormik } from "formik";
import * as Yup from "yup";
import LoginRequest from '../request';

import LoginForm from "./LoginForm";

const FormikSignup = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string().required("Please enter a password!")
  }),
  handleSubmit(values, { props, setStatus }) {
    console.log(values);
   return LoginRequest(values);
  }
})(LoginForm);

export default FormikSignup;
