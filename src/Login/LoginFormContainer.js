import { withFormik } from "formik";
import * as Yup from "yup";
import LoginRequest from "../Request/login_request";

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
    LoginRequest(values).then(res => {
      if (res.status === 422) {
        setStatus(res.data.message);
        return;
      }
      console.log("LOGIN RES IN HANDLE SUBMIT: ", res);
      props.history.push(`/dashboard/${res.id}`);
    });
  }
})(LoginForm);

export default FormikSignup;
