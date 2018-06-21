// import React, {Component} from 'react';
// import {Formik} from 'formik';

// export default class LoginForm extends Component {
//   render() {
//     return (
//       <div>
//         <h2> Login </h2>

//           <Formik>

//       initialValues={{
//         email: '',
//         password: '',
//       }}

//       validate={values => {
//         let errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}


//       onSubmit={values => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//   }, 500);
// }}

//       {/* /////////////////////////////////////////////////////////////
//         using the onsubmit above to test for result on the window alert later change to
//         onsubmit below

//       ////////////////////////////////////////////////////////////// */}

//       {/* onSubmit={(
//         values,
//         { setSubmitting, setErrors  }
//       ) => {
//         LoginToMyApp(values).then(
//           user => {
//             setSubmitting(false);
//             // do whatevs...
//             // props.updateUser(user)
//           },
//           errors => {
//             setSubmitting(false);
//             // Maybe transform your API's errors into the same shape as Formik's
//             setErrors(transformMyApiErrors(errors));
//           }
//         );
//       }} */}

//       //////////////////////////////////////////////////////////////////

//       render={({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {touched.email && errors.email && <div>{errors.email}</div>}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {touched.password && errors.password && <div>{errors.password}</div>}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//        )
//       }
//        </Formik>

//     </div>


//   )
// }
// }