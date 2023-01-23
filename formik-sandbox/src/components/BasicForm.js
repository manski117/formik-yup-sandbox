import React from 'react';
import {useFormik} from 'formik'
import { basicSchema } from '../schemas';

//setup your custom onSubmit needs
const onSubmit = () =>{
  console.log('submitted');
}

//setup your formik component as a functional component
const BasicForm = () => {
  //any formik component must define 3 key props: initial values, validate, and onSubmit handler.
  //handleSubmit just calls onSubmit
  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(values, errors);
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur} 
         
        />
        <label htmlFor="age">Age</label>
        <input 
          id="age" 
          type="number" 
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur} 
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          type="password" 
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur} 
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          id="confirmPassword" 
          type="password" 
          placeholder="Confirm your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur} 
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default BasicForm;