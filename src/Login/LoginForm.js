import React from "react";
import { Form, Field } from "formik";

const LoginForm = ({ errors, touched, status }) => {
  const { name, userName, email, password, isExpert } = errors;
  return (
    <Form>
      <h3>Log in</h3>
      <label>Email</label>
      {touched.email && email && <p>{email}</p>}
      <Field type="email" name="email" placeholder="email" />
      <label>Password</label>
      {touched.password && password && <p>{password}</p>}
      <Field type="password" name="password" placeholder="Password" />
      <button>Log in</button>
    </Form>
  );
};

export default LoginForm;
