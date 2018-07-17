import { withFormik, Formik } from "formik";
import * as Yup from "yup";
import SignupRequest from "../Request/signup_request";
import SignupForm from "./SignupForm";
import { CLIENT_RENEG_WINDOW } from "tls";

const FormikSignup = withFormik({
  mapPropsToValues({ name, user_name, email, password, is_experts }) {
    return {
      name: name || "",
      user_name: user_name || "",
      email: email || "",
      password: password || "",
      is_experts: is_experts || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a name!"),
    user_name: Yup.string().required("Please enter a userName!"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string().required("Please enter a password!"),
    is_experts: Yup.string().required("Please select a value")
  }),
  handleSubmit(values, { props, setStatus }) {
    console.log(values);
    SignupRequest(values).then(res => {
      if (res.status === 422) {
        setStatus(res.data.message);
        return;
      }
      props.history.push(`/dashboard/${res.id}`);
    });
  }
})(SignupForm);

export default FormikSignup;

// setStatus in the signup request allows use to pass
// values in the status variable of Formikthe value we
// intend to pass is that of the err.response message
// from the backend
// log the err.response and res.id
