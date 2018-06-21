import React from "react";
import { Form, Field } from "formik";

const SignupForm = ({ errors, touched, status }) => {
  const { name, userName, email, password, isExpert } = errors;
  return (
    <Form>
      <h3>Sign up</h3>
      <label>Name</label>
      {touched.name && name && <p>{name}</p>}
      <Field type="name" name="name" placeholder="name" />
      <label>Username</label>
      {touched.userName && userName && <p>{userName}</p>}
      <Field type="userName" name="userName" placeholder="userName" />
      <label>Email</label>
      {touched.email && email && <p>{email}</p>}
      <Field type="email" name="email" placeholder="email" />
      <label>Password</label>
      {touched.password && password && <p>{password}</p>}
      <Field type="password" name="password" placeholder="Password" />
      <label>Are you an expert</label>
      {touched.isExpert && isExpert && <p>{isExpert}</p>}
      <Field component="select" name="isExpert">
        <option value="" />
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </Field>
      <button>Submit</button>
    </Form>
  );
};

export default SignupForm;
