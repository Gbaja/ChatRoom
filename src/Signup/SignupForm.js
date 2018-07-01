import React from "react";
import { Form, Field } from "formik";

const SignupForm = ({ errors, touched, status }) => {
  const { name, user_name, email, password, is_experts } = errors;
  return (
    <Form>
      <h3>Sign up</h3>
      <label>Name</label>
      {touched.name && name && <p>{name}</p>}
      <Field type="name" name="name" placeholder="name" />
      <label>Username</label>
      {touched.user_name && user_name && <p>{user_name}</p>}
      <Field type="user_name" name="user_name" placeholder="userName" />
      <label>Email</label>
      {touched.email && email && <p>{email}</p>}
      <Field type="email" name="email" placeholder="email" />
      <label>Password</label>
      {touched.password && password && <p>{password}</p>}
      <Field type="password" name="password" placeholder="Password" />
      <label>Are you an expert</label>
      {touched.is_experts && is_experts && <p>{is_experts}</p>}
      <Field component="select" name="is_experts">
        <option value="" />
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Field>
      <button>Submit</button>
      {status && <p> {status}</p>}
    </Form>
  );
};

export default SignupForm;
