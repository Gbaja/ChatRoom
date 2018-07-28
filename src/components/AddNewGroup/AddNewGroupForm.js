import React from "react";
import { Form, Field } from "formik";

const AddNewGroupForm = ({ errors, touched, status }) => {
  const { name, description } = errors;
  return (
    <Form>
      <h3>Add new group</h3>
      {status && <p>{status}</p>}
      <label>Group Name</label>
      {touched.name && name && <p>{name}</p>}
      <Field type="text" name="name" placeholder="Group name" />
      <label>Description</label>
      {touched.description && description && <p>{description}</p>}
      <Field type="text" name="description" placeholder="Description" />
      <button>Create</button>
    </Form>
  );
};

export default AddNewGroupForm;
